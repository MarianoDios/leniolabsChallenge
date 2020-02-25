import {HashRouter, Route, Switch} from 'react-router-dom';
import React, {Fragment} from 'react';

import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import CongressDetails from './CongressmanDetails';

const MainRoutes = () => (
    <HashRouter>
        <Fragment>
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/details/:id" component={CongressDetails}/>
                </Switch>
            </main>
            <Footer/>
        </Fragment>
    </HashRouter>
);

export default MainRoutes;
