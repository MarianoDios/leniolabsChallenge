import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Collapse, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { filterCongressByNameRequested, filterCongressByPartyRequested, filterCongressByGenderRequested, requestCongress } from '../actions/congress';

class AdvancedFilters extends Component {
    constructor(props) {
        super(props);
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

    renderPartyFilter = () => {
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Filter by Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Party" name="filter" onChange={e => this.props.filterCongressByParty(e.target.value)} aria-label="Default" />
            </InputGroup>
        );
    }

    renderGenderFilter = () => {
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Filter by Gender</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Gender" name="GenderFilter" onChange={e => this.props.filterCongressByGender(e.target.value)} aria-label="Default" />
            </InputGroup>
        );
    }

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
                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Filter by Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="By name, gender or party" name="filter" onChange={e => this.props.filterCongressByNameRequested(e.target.value)} aria-label="Default" />
                        </InputGroup>
                        {this.renderPartyFilter()}
                        {this.renderGenderFilter()}
                    </div>
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
        filterCongressByNameRequested: value => dispatch(filterCongressByNameRequested(value)),
        filterCongressByParty: value => dispatch(filterCongressByPartyRequested(value)),
        filterCongressByGender: value => dispatch(filterCongressByGenderRequested(value)),
        requestCongress: () => dispatch(requestCongress())
    })
)(AdvancedFilters);

