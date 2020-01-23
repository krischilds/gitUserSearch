import React from "react";
import Card from "react-bootstrap/Card";

export default function GitUserRepos(props) {
  var output;
  if (props.userRepoList) {
    const listItems = props.userRepoList.map((app, i) => getRepoCard(app, i));
    output = (
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gridGap: "1rem"
        }}
      >
        {listItems}
      </section>
    );
  } else {
    output = <section />;
  }

  return output;
}

function getRepoCard(app, i) {
  return (
    <Card key={app.id} bg="light" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{app.name}</Card.Title>
        <Card.Text>{app.description}</Card.Text>
        <Card.Link target="_new" href={app.html_url}>
          {app.html_url}
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
