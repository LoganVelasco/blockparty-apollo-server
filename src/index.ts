import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const hints = [
  {
    id: 1,
    text: 'Try Level Builder',
  },
  {
     id: 2,
     text: 'Disable hints in settings',
  },
  {
     id: 3,
     text: 'New Hint',
  },
  {
     id: 4,
     text: 'Avoid the Enemy Block',
  },
];

const colors = [
  {
    id: 1,
    colorId: 1,
    hints: hints
  },
  {
     id: 2,
     colorId: 2,
  },
];

 const typeDefs = `#graphql
   type Hint {
     id: ID!
     text: String
   }

   type Color {
     id: ID!
     colorId: Int
     hints: [Hint]
   }


   type Query {
     hints: [Hint]
     colors: [Color]
   }
 `;

 const resolvers = {
     Query: {
       hints: () => hints,
       colors: () => colors,
     },
   };


const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection : true
});


const port = Number.parseInt(process.env.PORT) || 4000;

const { url } = await startStandaloneServer(server, { listen: { port } });

console.log(`🚀  Server ready at: ${url}`);