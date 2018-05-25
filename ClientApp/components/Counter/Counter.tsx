import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../../reducers';
import * as CounterStore from '../../reducers/Counter';
import {Dialog, DialogContent, StyleRulesCallback} from '@material-ui/core';
import {compose} from "redux";
import withStyles from "@material-ui/core/styles/withStyles";

type CounterProps =
    CounterStore.CounterState
    & typeof CounterStore.actionCreators
    & RouteComponentProps<{}>;

type ClassNames =
    | 'root'

const styles: StyleRulesCallback<ClassNames> = theme => ({
    root: {
        
    }

});

class Counter extends React.Component<CounterProps> {
    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.props.count }</strong></p>

            <button onClick={ () => { this.props.increment() } }>Increment</button>
            <button onClick={ () => { this.props.openDialog() } }>Open Dialog</button>
            <Dialog open={this.props.dialogOpen} onClose={() => {this.props.closeDialog()}}>
                <DialogContent>
                    FOOOOOO
                </DialogContent>
            </Dialog>
        </div>;
    }
}

// Wire up the React component to the Redux store
export default compose(connect(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
    CounterStore.actionCreators                 // Selects which action creators are merged into the component's props
),withStyles(styles))(Counter) as any;