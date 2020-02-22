import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Collapse, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { filterCongressRequested, requestCongress } from '../actions/congress';

class AdvancedFilters extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handletoggle = this.handletoggle.bind(this);

        this.state = {
            toggle: false,
        }
    }
    handletoggle = () => {
        console.log('toggle Status: ', this.state.toggle);
        this.setState({
            toggle: !this.state.toggle
        });
    };


    handleChange = e => {
        this.props.filterCongressRequested(e.target.value);
    };
    render() {
        return (
            <>
                <Button
                    onClick={() => this.handletoggle()}
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.toggle}
                >
                    Advanced filters
            </Button>
                <Collapse in={this.state.toggle}>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Filter by Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="By name, gender or party" name="filter" onChange={e => this.handleChange(e)} aria-label="Default" />
                    </InputGroup>
                </Collapse>
            </>
        );
    }
}

export default connect(
    state => ({
        congress: state.congress.congress
    }),
    dispatch => ({
        filterCongressRequested: value => dispatch(filterCongressRequested(value)),
        requestCongress: () => dispatch(requestCongress())
    })
)(AdvancedFilters);

