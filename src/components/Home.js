import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { filterCongressRequested, requestCongress } from '../actions/congress';
import AdvancedFilters from './AdvancedFilter';
import Congress from './Congress';
import './components.css';

class Home extends PureComponent {
    static propTypes = {
        congress: PropTypes.arrayOf(PropTypes.shape({})),
        filterCongressRequested: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        requestCongress: PropTypes.func.isRequired
    };

    static defaultProps = {
        loading: true
    };

    componentDidMount() {
        this.props.requestCongress();
    }

    handleChange = e => {
        this.props.filterCongressRequested(e.target.value);
    };

    render() {
        const { congress } = this.props;

        return (
            <>
                <Row className="container">
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Filter</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="By name, gender or party" name="filter" onChange={e => this.handleChange(e)} aria-label="Default" />
                        </InputGroup>
                    </Col>
                    <Col sm={6}>
                        <AdvancedFilters />
                    </Col>
                </Row>
                <Row className="container">
                    <Col sm={2}><h5>Name</h5></Col>
                    <Col sm={1}><h5>Gender</h5></Col>
                    <Col sm={1}><h5>Party</h5></Col>
                </Row>
                {congress && congress.members.map(member => (
                    <Congress key={member.id} congress={member} />
                ))}
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
)(Home);
