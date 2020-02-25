import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'react-bootstrap';
import './components.css';

const Congress = ({ congress }) => {
    return (
        <Row className="container">
            <Col sm={2}>
                {congress.first_name} {congress.last_name}
            </Col>
            <Col sm={1}>
                {congress.gender}
            </Col>
            <Col sm={1}>
                {congress.party}
            </Col>
            <Col sm={1}>
                <Button onClick={() => {console.log(congress)}}className="info"> ...Details</Button>
            </Col>
        </Row>
    );
}

Congress.propTypes = {
    congress: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Congress;
