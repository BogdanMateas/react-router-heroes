import React from "react";
import { Router } from "@reach/router";
import { Auth } from "../containers/Auth";
import { Main } from "../containers/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Auth} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
};
