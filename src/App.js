import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Authentication } from "./features/auth/Authentication";
import { configureStore } from "./store/Store";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { Challenges } from "./features/challenges/Challenges";

const { store, persistor } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <PrivateRoute path="/challenges">
                <Challenges />
              </PrivateRoute>
              <Route path="">
                <Authentication />
              </Route>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = store.getState().auth.loggedIn;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
