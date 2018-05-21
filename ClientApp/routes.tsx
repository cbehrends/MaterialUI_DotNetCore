import * as React from 'react';
import { Route } from 'react-router-dom';
import {default as Layout} from './components/Layout';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import {Switch} from "react-router";

export const routes = 
    <Switch>
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
            </Layout>
    </Switch>;