import React from "react";
import { Route, Switch } from "react-router-dom";
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
