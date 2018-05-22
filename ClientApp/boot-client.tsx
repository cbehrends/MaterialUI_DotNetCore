import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from "history/createBrowserHistory";
import {hot} from "react-hot-loader";
import {ApplicationState} from "./reducers";
import configureStore from "./configureStore";
import * as RoutesModule from './routes';
import {ConnectedRouter} from "react-router-redux";
import {Provider} from "react-redux";
let routes = RoutesModule.routes;

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(history, initialState);
const App = () => <Provider store={ store }>
    <ConnectedRouter history={ history } children={ routes } />
</Provider>;

const AppModule = hot(module)(App);

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(
            <AppModule/>
       ,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
