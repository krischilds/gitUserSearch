import React, { Component } from "react";
import UserSearch from "./UserSearch";
import Container from "react-bootstrap/Container";
import BreadcrumbsBar from "../Breadcrumbs";
import UserSearchResults from "./UserSearchResults";
// import { FaUser, FaSearch, FaChevronRight, FaHome } from "react-icons/fa";

class GitBrowser extends Component {
  constructor(props) {
    super(props);
    this.state.view = this.props.view ?? "home";
  }

  state = {
    userNameSearch: "",
    userData: null,
    usersData: null,
    userRepoList: null // TODO: Likely not needed
  };

  componentDidMount() {
    // this.loadReportData();
    // this.getData();
  }

  onChangeUserName = e => {
    let userName = e.target.value;
    this.loadUser(userName);
  };

  onSubmitRepoSearch = e => {
    e.preventDefault();
    let userName = e.target.value;
    this.loadUser(userName);
  };

  getUserUrl = user => {
    const dataUrl = `https://api.github.com/users/${user}`;
    return dataUrl;
  };

  getUsersUrl = (since, perPage) => {
    // since=101&per_page=100
    const s = since ?? 1;
    const p = perPage ?? 1;
    const dataUrl = `https://api.github.com/users?since=${s}&per_page=${p}`;
    return dataUrl;
  };

  getUserReposUrl = userName => {
    const dataUrl = `https://api.github.com/users/${userName}/repos`;
    return dataUrl;
  };

  // https://api.github.com/users/krischilds

  loadUser = userName => {
    if (!userName) return;
    const userUrl = this.getUserUrl(userName);
    fetch(userUrl)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Request failed.");
      })
      .then(data => {
        this.setState({ userData: data, userNameSearch: userName });
        this.loadUserRepoList(userName);
      })
      .catch(error => {
        console.log(error);
      });
  };

  loadUserRepoList = userName => {
    if (!userName) return;
    const dataUrl = this.getUserReposUrl(userName);
    fetch(dataUrl)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Request failed.");
      })
      .then(data => {
        console.log("Load User Repo List");
        console.log(data);
        this.setState({ userRepoList: data });
      })
      .catch(error => {
        console.log(error);
      });

    // description
  };
  // https://api.github.com/users?since=101&per_page=100
  render() {
    return (
      <Container>
        <BreadcrumbsBar
          userData={this.state.userData}
          userRepoList={this.state.userRepoList}
        />
        <UserSearch
          onSubmitRepoSearch={this.onSubmitRepoSearch}
          onChangeUserName={this.onChangeUserName}
          userName={this.state.userNameSearch}
        />
        <UserSearchResults
          userData={this.state.userData}
          userRepoList={this.state.userRepoList}
        />
      </Container>
    );
  }
}

export default GitBrowser;
