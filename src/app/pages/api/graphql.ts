import { typeDefs } from "../../Schemas/typeDefs";
import { resolvers } from "../../Schemas/resolvers";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
    typeDefs,
    resolvers
});


export default startServerAndCreateNextHandler(server);

  