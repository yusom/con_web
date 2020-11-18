import Member from "components/Members";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Login from "routes/Login";
import Register from "routes/Register";
import Members from "components/Members";
import Progress from "components/Progress";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/member">
          <Members />
        </Route>
        <Route exact path="/progress">
          <Progress />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
