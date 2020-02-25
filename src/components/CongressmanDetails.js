import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { getCongresman } from "../actions/congress";
import "./components.css";

class CongressDetails extends React.PureComponent {
  static propTypes = {
    congressMan: PropTypes.shape({}).isRequired,
    getCongresMan: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCongresman(id);
  }

  render() {
    const {congressMan} = this.props;
    let congressmanComponent;
    console.log(congressMan);
    if (congressMan) {
      congressmanComponent = (
          <Row className="container">
            <Col sm={6}>
              Name: {congressMan.first_name} {congressMan.last_name}
              <br />
              Date of birth: {congressMan.date_of_birth}
              <br />
              Current pary: {congressMan.current_party}
              <br />
              <a href={`https://www.twitter.com/${congressMan.twitter_account}`}>Twitter account</a>
            </Col>
          </Row>
      )
    }

    return (
        <>
          {congressmanComponent}
        </>
  );
}
}

export default connect(
  state => ({
    congressMan: state.congress.congressman
  }),
  dispatch => ({
      getCongresman:  id => dispatch(getCongresman(id))
  })
)(CongressDetails);
