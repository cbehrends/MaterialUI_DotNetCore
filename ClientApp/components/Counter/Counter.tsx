import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../../reducers';
import * as CounterStore from '../../reducers/Counter';
import {IncrementCountAction} from "../../reducers/Counter";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router";

interface ICounterProps extends RouteComponentProps<any>{
    classes?: any,
    children?: Element
}

type CounterProps =
    ICounterProps
    & CounterStore.CounterState
    & typeof CounterStore.actionCreators;
    // & RouteComponentProps<{}>;



class Counter extends React.Component<CounterProps> {
    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.props.count }</strong></p>

            <button onClick={ () => { this.props.increment() } }>Increment</button>
        </div>;
    }
}

// Wire up the React component to the Redux store

// export default connect(
//     (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
//     CounterStore.actionCreators                 // Selects which action creators are merged into the component's props
// )(Counter) as typeof Counter;


//export default withRouter(connect()(Counter)) as any;
//export default withRouter(withLayout(withStyles(styles)<{}>(Home))) as any;
export default withRouter(connect<CounterStore.CounterState,typeof CounterStore.actionCreators,CounterProps>(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
    CounterStore.actionCreators                 // Selects which action creators are merged into the component's props
    
)(Counter)) as any;