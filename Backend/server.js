var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema,GraphQLObjectType } = require('graphql');

// Construct a schema, using GraphQL schema language

var PlayerList = [  
    {
      "name": "Lionel Messi",
      "shirt": 10,
      "nationality": "Argentina" 
    },
    {
      "name": "Xavi Hernandez",
      "shirt": 6,
      "nationality": "Spain"
    },
    {
      "name": "Andrea Pirlo",
      "shirt": 21,
      "nationality": "Italy"
    },
    {
      "name": "Ronaldinho",
      "shirt": 10,
      "nationality": "Brazil"
    },
    {
      "name": "Carles Puyol",
      "shirt": 5,
      "nationality": "Spain"
    },
    {
      "name": "Pep Guardiola",
      "shirt": 4,
      "nationality": "Spain"
    },
    {
      "name": "Roberto Carlos",
      "shirt": 6,
      "nationality": "Brazil"
    },
  ];
  var TodoType = new GraphQLObjectType({  
    name: 'todo',
    fields: function () {
      return {
        id: {
          type: graphql.GraphQLID
        },
        title: {
          type: graphql.GraphQLString
        },
        completed: {
          type: graphql.GraphQLBoolean
          
        }
      }
    }
  });

var schema = buildSchema(`
  type Query {
    hello: String
    getRandom: Player
  }

  type Player{
    name: String
    shirt: Int
    nationality: String
    
    }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello Messi!';
  },

  getRandom: () => {
    return PlayerList[Math.floor(Math.random()*PlayerList.length)];
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');