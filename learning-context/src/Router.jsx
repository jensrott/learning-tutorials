import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';

const Router = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/add" component={AddEmployee} exact />
                <Route path="/edit/:id" component={EditEmployee} exact />
            </Switch>
        </React.Fragment>
    )
}

export default Router
