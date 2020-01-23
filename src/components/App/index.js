import React from "react";
import AppNav from "../AppNav";
import GitBrowser from "../GitBrowser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const routing = (
    <Router>
      <div>
        <Route exact path="#" component={GitUserHome} />
        <Route exact path="#userSearch" component={GitUserSearch} />
        <Route
          exact
          path="#userSearchResults"
          component={GitUserSearchResults}
        />
        <Route exact path="#users" component={DisplayUsers} />
      </div>
    </Router>
  );

  return routing;
}

function GitUserHome() {
  return (
    <>
      <AppNav title="GIT Browser" />
      <GitBrowser />
    </>
  );
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
