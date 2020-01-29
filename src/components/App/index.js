import React from "react";
import AppNav from "../AppNav";
import GitBrowser from "../GitBrowser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

const version = "1.0.1";

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
  console.log("BUILD VERSION: " + version);

  return (
    <>
      <AppNav title="GIT Browser" />
      <GitBrowser />
      <div className="container">BUILD VERSION: {version}</div>
    </>
  );
}

function GitUserSearch() {
  return (
    <>
      <AppNav title="GIT User Search" />
      <GitBrowser />
      <div className="container">BUILD VERSION: {version}</div>
    </>
  );
}

function GitUserSearchResults() {
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
