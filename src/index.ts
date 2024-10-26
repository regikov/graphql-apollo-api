import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { resolvers } from "./resolvers.js";
import typeDefs from "./schema.js";

async function startServer() {
    const app: Application = express();

    // Middleware configuration
    app.use(cors());
    app.use(bodyParser.json());

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();

    // Use applyMiddleware with Express
    apolloServer.applyMiddleware({ app, path: "/graphql" });

    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Server ready at http://localhost:${PORT}/graphql`);
    });
}

startServer();
