import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const hints = [
  {
    id: 0,
    text: 'Tap Level builder to build a custom level of your own!',
  },
  {
    id: 1,
    text: 'Earn more stars to unlock harder difficulties',
  },
  {
     id: 2,
     text: 'Tap the gear icon to apply a custom theme',
  },
  {
     id: 3,
     text: 'More Levels coming soon!',
  },
  {
     id: 4,
     text: 'Tired of hints? Disable this window in settings',
  },
];


 const typeDefs = `#graphql
   type Hint {
     id: ID!
     text: String
   }

   type Query {
     hints: [Hint]
   }
 `;

 const resolvers = {
     Query: {
       hints: () => hints,
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