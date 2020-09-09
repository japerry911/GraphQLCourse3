const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "hello",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 8000 })
  .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));
