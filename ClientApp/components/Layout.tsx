import * as React from 'react';
import {MuiThemeProvider, createMuiTheme, StyleRulesCallback} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {WithStyles} from "@material-ui/core";
import withRoot from "./withRoot";

interface ILayoutProps {
    classes?: any,
    children: Element,
    
}
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

type LayoutProps = ILayoutProps & WithStyles<'root'>;


class Layout extends React.Component<LayoutProps,{}>{
    
    public render() {
       const {classes} = this.props as ILayoutProps;
        
        return(
            <div id="main">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit' aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.flex} color='inherit'>
                            Title
                        </Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
                { this.props.children }
            </div>);
    }
}

export default withRoot(withStyles(styles)<any>(Layout)) as any;