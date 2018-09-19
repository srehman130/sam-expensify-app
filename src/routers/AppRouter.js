import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import CreatePage from '../components/CreatePage';
import HelpPage from '../components/HelpPage';
import EditPage from '../components/EditPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/create" component={CreatePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>        
    </BrowserRouter>
);

export default AppRouter;