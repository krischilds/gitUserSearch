import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class AppNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/krischilds">
            Back to Kris's Profile
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    );
  }
}

AppNav.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppNav;
