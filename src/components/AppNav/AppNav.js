import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";

class AppNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    );
  }
}

AppNav.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppNav;
