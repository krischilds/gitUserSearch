import React from "react";
import GitUserRepos from "./GitUserRepos";
import UserCard from "./UserCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function displayResults(userData, userRepoList) {
  const searchResults = (
    <Row>
      <Col sm={4} style={{ minWidth: "300px" }}>
        <UserCard userData={userData} />
      </Col>
      <Col sm={8}>
        <h4
          style={{
            marginBottom: "40px",
            borderBottom: "1px solid #e0e0e0",
            padding: "10px"
          }}
        >
          {userRepoList && "Repos"}
        </h4>
        <GitUserRepos userRepoList={userRepoList} />
      </Col>
    </Row>
  );

  if (userData) {
    return searchResults;
  } else {
    return <div style={{ padding: "10px" }} />;
  }
}

export default function UserSearchResults(props) {
  return props.userData && displayResults(props.userData, props.userRepoList);
}
