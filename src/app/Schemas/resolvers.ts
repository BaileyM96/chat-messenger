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
};

export { resolvers}