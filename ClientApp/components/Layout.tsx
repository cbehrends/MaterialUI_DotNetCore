import * as React from 'react';
import {MuiThemeProvider, createMuiTheme, StyleRulesCallback} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AnyAction, compose} from 'redux';
import {connect} from "react-redux";
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router';
import {ApplicationState} from "../reducers/";
import * as CounterStore from "../reducers/Counter";


const theme = createMuiTheme({
    palette: {
        //type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

interface ILayoutProps {
    classes: any,
    children: Element
}


const drawerWidth = 240;

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

type LayoutProps = ILayoutProps & RouteComponentProps<{}>;


class Layout extends React.Component<LayoutProps,{}> {
    
    public render() {
        
        const {classes} = this.props as ILayoutProps;
        
        return(
        <MuiThemeProvider theme={theme}>
            
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
                
                
            </div>
        </MuiThemeProvider>);
       
        
    }
}

//export default Layout;
//export default compose(withStyles(styles, {}),)(Layout) as typeof Layout;
//export default withStyles(styles, {})(Layout) as typeof Layout;
export default withStyles(styles)<{}>(Layout);