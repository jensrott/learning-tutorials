import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import TodoDetail from './views/TodoDetail';
import Todos from './views/Todos';
import Container from './components/Container';
import Footer from './components/Footer';

const AppRouter = () => {
    return (
        <React.Fragment>
            <Container>
                <Switch>
                    <Route exact path="/" component={Todos} />
                    <Route exact path="/todo/:id" component={TodoDetail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default AppRouter;