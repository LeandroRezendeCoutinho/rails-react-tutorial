import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import { configureStore } from "../configureStore.js";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => "Home"} />
            <Route
              path="/hello"
              render={() => <HelloWorld greeting="Fiend" />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
