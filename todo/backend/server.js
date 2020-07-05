const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const chalk = require('chalk');
const app = express();

const localPort = 4000;
const connectDB = require('./src/config/mongoDb');

const seeder = require('./src/db/seeder');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/graphql/typeDefs');
const resolvers = require('./src/graphql/resolvers');

require("dotenv").config();

connectDB()
  .then(() => {
    console.log(chalk.greenBright("MongoDB Succesfully Connected!"));
  })
  .catch(err => {
    console.log(chalk.redBright(err))
  });

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: "GET,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders:
    "X-Auth-Token, Content-Type, Origin, Authorization, Content-Length, X-Requested-With, Content-Disposition, Access-Control-Allow-Origin, Access-Control-Allow-Methods",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/seed-todos', seeder.seedTodos);
// app.use(volleyball); Only one endpoint and always POST-request.

const server = new ApolloServer({ typeDefs, resolvers });

// Middleware for our express server
server.applyMiddleware({ app, cors: false });

app.listen({ port: process.env.PORT || localPort }, () => {
  console.log(chalk.magenta(
    `🚀 GraphQL GUI can be visited at: http://localhost:${localPort}/graphql`)
  );
})