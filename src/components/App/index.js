import React from "react";
import AppNav from "../AppNav";
import GitBrowser from "../GitBrowser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
var buildVersion = require("build-version");

function App() {
  const routing = (
    <Router basename="/GitUserSearch">
      <div>
        <Route exact path="/" component={GitUserHome} />
        <Route exact path="/userSearch" component={GitUserSearch} />
        <Route
          exact
          path="/userSearchResults"
          component={GitUserSearchResults}
        />
        <Route exact path="/users" component={DisplayUsers} />
      </div>
    </Router>
  );

  return routing;
}

function GitUserHome() {
  buildVersion().then(version => {
    console.log("BUILD VERSION: " + version);

    return (
      <>
        <AppNav title="GIT Browser" />
        <GitBrowser />
        <div>BUILD VERSION: {version}</div>
      </>
    );
  });
}

function GitUserSearch() {
  return (
    <>
      <AppNav title="GIT User Search" />
      <GitBrowser />
    </>
  );
}

function GitUserSearchResults() {
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
