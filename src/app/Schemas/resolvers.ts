import User  from '../models/userProfile';

type MeArgs = {
    username: string;
}

type Context = {
    req: any;
    res: any;
    user?: any;
}


const resolvers = {
    Query: {
        me: async (_: any, { username }: MeArgs, context: Context ) => {
            const user = await User.findOne({ username} )
            return user;
        }
    },

    // Mutation: {
    //     signUp: async(args, context) => {
    //         //NEED TO CREATE A NEW USER AND RETURN IT
    //     },
    //     login: async(args, context) => {
    //         //NEED TO RETURN THE USER MODEL AND USE FINDONE METHOD
    //     },
    //     sendMessage: async(args, context) => {
    //         //NEED TO CREATE A NEW MESSAGE AND RETURN IT
    //     },
    //     sendFriendRequest: async(args, context) => {
    //         //NEED TO CREATE A NEW FRIEND REQUEST AND RETURN IT
    //     },
    //     acceptFriendRequest: async(args, context) => {
    //         //NEED TO UPDATE THE FRIEND REQUEST STATUS TO ACCEPTED AND RETURN IT
    //     },
    //     declineFriendRequest: async(args, context) => {
    //         //NEED TO UPDATE THE FRIEND REQUEST STATUS TO DECLINED AND RETURN IT
    //     }
    // },
};

export { resolvers}