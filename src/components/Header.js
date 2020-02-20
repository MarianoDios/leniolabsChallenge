import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './components.css';

const Header = () => {
    return (
        <Row className="header">
            <Col sm={12}>
                <h3 className="headerText">Header</h3>
            </Col>
        </Row>
    );
}

export default Header;
