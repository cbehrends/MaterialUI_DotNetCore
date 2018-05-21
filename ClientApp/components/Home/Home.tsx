import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router';
import {NavLink, RouteComponentProps} from 'react-router-dom';
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core/styles";
import {StyleRulesCallback, WithStyles} from "@material-ui/core";


type ClassNames =
    | 'root'
    | 'flex'
    | 'menuButton';

const styles: StyleRulesCallback<ClassNames> = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

});

type HomeProps = WithStyles<'root'> & RouteComponentProps<any>;

class Home extends React.Component<HomeProps> {

    public render() {
        return (
            <Paper>
                <h1>Hello, world!</h1>
                <NavLink to={'/counter'}>Counter</NavLink>
            </Paper>);
    }
}

export default withRoot(withStyles(styles)<any>(Home)) as any;