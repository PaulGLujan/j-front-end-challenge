import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Authentication } from "./features/auth/Authentication";
import { configureStore } from "./store/Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Challenges } from "./features/challenges/Challenges";

const { store, persistor } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path="/challenges">
                <Challenges />
              </Route>
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
