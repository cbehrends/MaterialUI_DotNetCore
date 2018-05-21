import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router';
import {NavLink, RouteComponentProps} from 'react-router-dom';
import withRoot from "../withRoot";

class Home extends React.Component<RouteComponentProps<any>> {

    public render() {
        return (
            <Paper>
                <h1>Hello, world!</h1>
                <NavLink to={'/counter'}>Counter</NavLink>
            </Paper>);
    }
}

export default withRoot(withRouter(Home)) as any;