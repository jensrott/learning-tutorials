import React from 'react';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import AppRouter from './Router';

const uri = "http://localhost:4000/graphql";
const client = new ApolloClient({
  uri
});

const App = () => {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <Router>
          <AppRouter />
        </Router>
      </ApolloProvider>
    </React.Fragment >
  );
}

export default App;
