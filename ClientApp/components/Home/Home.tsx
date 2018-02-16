import * as React from 'react';
import Paper from 'material-ui/Paper'; 

import { RouteComponentProps, NavLink } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    
    
    
    
    public render() {
        return <Paper>
            <h1>Hello, world!</h1>
            <NavLink to={'/counter'}>Counter</NavLink>
        </Paper>
    }
}
