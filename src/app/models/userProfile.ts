import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";


interface UserProfile {
    email: string;
    password: string;
    username: string;
}


const userSchema = new Schema<UserProfile>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true }
});

const saltRounds = 10;

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
    if (!user) {
        throw new Error("User not found");
    }   
    next();
});

const User = models.User || model<UserProfile>("User", userSchema);
export default User;