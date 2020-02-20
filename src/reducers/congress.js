import {filter, lowerCase} from 'lodash';
import {
    CONGRESS_FETCH_REQUESTED,
    CONGRESS_FETCH_SUCCEEDED,
    FILTER_CONGRESS_REQUESTED,
} from '../actions/congress';

import {
    ERROR_OCCURRED
} from '../actions/error';

const filterCongress = (value, congress) => {
    const newCongress = {...congress};
    newCongress.members = filter(
        newCongress.members,
            c => c.gender === value
                || c.party === value
                || lowerCase(c.first_name) === value
                || lowerCase(c.last_name) === value
    );
    return newCongress;
};

export default function congress(state = {loading: false, error: false}, action) {
    switch (action.type) {
        case CONGRESS_FETCH_REQUESTED:
            return {...state, loading: true};
        case CONGRESS_FETCH_SUCCEEDED:
            return {...state, congress: action.congress, originalCongress: action.congress, loading: false, error: false};
        case FILTER_CONGRESS_REQUESTED:
            return {...state, congress: action.value ? filterCongress(action.value, state.originalCongress) : state.originalCongress, loading: false, error: false};
        case ERROR_OCCURRED:
            return {...state, error: true, loading: false};
        default:
            return state;
    }
}
