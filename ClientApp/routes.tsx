import * as React from 'react';
import { Route } from 'react-router-dom';


import {default as Layout} from './components/Layout';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';


export const routes = <Layout>
    <Route exact path='/' component={ Home }  />
    <Route exact path='/counter' component={ Counter } />
</Layout>;
