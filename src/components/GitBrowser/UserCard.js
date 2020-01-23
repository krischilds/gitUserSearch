import React from "react";
import Card from "react-bootstrap/Card";

export default function UserCard(props) {
  return props.userData && getUserCard(props.userData);
}

function getUserCard(app) {
  return (
    <Card bg="light" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={app.avatar_url} />
      <Card.Body>
        <Card.Title>{app.name}</Card.Title>
        <Card.Text>
          <Card.Link target="_new" href={app.html_url}>
            {app.html_url}
          </Card.Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>{app.created_at}</small>
      </Card.Footer>
    </Card>
  );
}
