import React from "react";
import { Route, Switch } from "react-router-dom";
import PokedexDrawer from "./components/PokedexDrawer";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <ResponsiveDrawer {...props} />}
      />
    </Switch>
  );
}

export default App;
