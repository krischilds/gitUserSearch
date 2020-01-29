import React from "react";
import AppNav from "../AppNav";
import GitBrowser from "../GitBrowser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router } from "react-router-dom";

const version = "1.0.1";

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
  console.log("BUILD VERSION: " + version);

  return (
    <>
      <AppNav title="GIT Browser" />
      <GitBrowser />
      <div className="container">BUILD VERSION: {version}</div>
    </>
  );
}

function DisplayUserSearch() {
  return (
    <>
      <AppNav title="GIT User Search" />
      <GitBrowser />
      <div className="container">BUILD VERSION: {version}</div>
    </>
  );
}

function DisplayUserSearchResults() {
  return (
    <>
      <AppNav title="GIT User Search Results" />
      <GitBrowser />
      <div className="container">BUILD VERSION: {version}</div>
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
