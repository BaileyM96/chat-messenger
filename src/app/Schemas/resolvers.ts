const resolvers = {
    Query: {
        me: async(args, context) => {
            //NEEED TO RETURN THE USER MODEL AND USE FINDONE METHOD
        }
    },

    Mutation: {
        signUp: async(args, context) => {
            //NEED TO CREATE A NEW USER AND RETURN IT
        },
        login: async(args, context) => {
            //NEED TO RETURN THE USER MODEL AND USE FINDONE METHOD
        },
        sendMessage: async(args, context) => {
            //NEED TO CREATE A NEW MESSAGE AND RETURN IT
        },
        sendFriendRequest: async(args, context) => {
            //NEED TO CREATE A NEW FRIEND REQUEST AND RETURN IT
        },
        acceptFriendRequest: async(args, context) => {
            //NEED TO UPDATE THE FRIEND REQUEST STATUS TO ACCEPTED AND RETURN IT
        },
        declineFriendRequest: async(args, context) => {
            //NEED TO UPDATE THE FRIEND REQUEST STATUS TO DECLINED AND RETURN IT
        }
    },
};