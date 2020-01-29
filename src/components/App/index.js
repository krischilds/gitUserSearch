import React from "react";
import AppNav from "../AppNav";
import GitBrowser from "../GitBrowser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router } from "react-router-dom";

function App(props) {
  console.log("App version = " + props.version);

  const routing = (
    <Router basename="/GitUserSearch">
      <div>
        <Route exact path="/" component={DisplayUserHome} />
        <Route path="/userSearch" component={DisplayUserSearch} />
        <Route path="/userSearchResults" component={DisplayUserSearchResults} />
        <Route path="/users" component={DisplayUsers} />
      </div>
    </Router>
  );

  return routing;
}

function DisplayUserHome() {
  const version = "1.0.0";
  return (
    <>
      <AppNav title="GIT Browser" />
      <GitBrowser />
      <div>BUILD VERSION: {version}</div>
    </>
  );
}

function DisplayUserSearch() {
  return (
    <>
      <AppNav title="GIT User Search" />
      <GitBrowser />
    </>
  );
}

function DisplayUserSearchResults() {
  return (
    <>
      <AppNav title="GIT User Search Results" />
      <GitBrowser />
    </>
  );
}

function DisplayUsers() {
  return (
    <>
      <AppNav title="Display Users" />
      <GitBrowser />
    </>
  );
}

export default App;
