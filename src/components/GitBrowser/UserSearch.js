import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";
import { FaSearch, FaChevronRight, FaHome } from "react-icons/fa";

class GitUserForm extends Component {
  render() {
    // const { selectedPickup, selectedDropoff } = this.props;

    return (
      <Form onSubmit={this.props.onSubmitRepoSearch}>
        <InputGroup className="mb-3" controlId="searchText">
          <FormControl
            id="searchText"
            placeholder="GIT username"
            aria-label="GIT username"
            aria-describedby="searchText"
            onBlur={this.props.onChangeUserName}
          />
          <InputGroup.Append controlId="searchButton">
            <Button variant="outline-secondary" id="searchButton" type="submit">
              <FaSearch /> Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

GitUserForm.propTypes = {
  userName: PropTypes.string.isRequired,
  onSubmitRepoSearch: PropTypes.func.isRequired,
  onChangeUserName: PropTypes.func.isRequired
};

export default GitUserForm;
