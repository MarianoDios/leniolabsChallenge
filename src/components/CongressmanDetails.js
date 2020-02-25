import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { getCongresman } from "../actions/congress";
import "./components.css";

class CongressDetails extends React.PureComponent {
  static propTypes = {
    congressMan: PropTypes.shape({}).isRequired,
    getCongresman: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCongresman(id);
  }
  render() {
      const {congressMan} = this.props;
      console.log(congressMan);
    return (
      <>
      aaa
        {/* <Row className="container">
          <Col sm={2}>
            <h5>Name</h5>
          </Col>
          <Col sm={2}>
            <h5>Title</h5>
          </Col>
          <Col sm={1}>
            <h5>Gender</h5>
          </Col>
          <Col sm={1}>
            <h5>Party</h5>
          </Col>
          <Col sm={2}>
            <h5>Twitter</h5>
          </Col>
        </Row>
        <Row className="container">
          <Col sm={2}>
            {congressMan.first_name} {congressMan.last_name}
          </Col>
          <Col sm={2}>{congressMan.title}</Col>
          <Col sm={1}>{congressMan.gender}</Col>
          <Col sm={1}>{congressMan.party}</Col>
          <Col sm={2}>
            <a href={`www.twitter.com/${congressMan.twitter_account}`}></a>
          </Col>
        </Row> */}
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
