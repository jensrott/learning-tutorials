import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './Router';

import { GlobalProvider } from './context/GlobalState';

import './tailwind.generated.css';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <AppRouter />
      </Router>
    </GlobalProvider>

  );
}

export default App;
