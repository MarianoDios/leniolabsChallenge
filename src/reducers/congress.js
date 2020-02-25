import { filter } from 'lodash';
import {
    CONGRESS_FETCH_REQUESTED,
    CONGRESS_FETCH_SUCCEEDED,
    FILTER_CONGRESS_REQUESTED,
    FILTER_CONGRESS_NAME_REQUESTED,
    FILTER_CONGRESS_PARTY_REQUESTED,
    FILTER_CONGRESS_GENDER_REQUESTED,
    FILTER_CONGRESS_BY_ID_REQUESTED,
    FILTER_CONGRESS_BY_ID_RECEIVED,
} from '../actions/congress';

import {
    ERROR_OCCURRED
} from '../actions/error';

const filterCongress = (value, congress) => {
    const newCongress = { ...congress };
    newCongress.members = filter(
        newCongress.members,
        c => c.gender === value
            || c.party === value
            || c.first_name.toLowerCase() === value.toLowerCase()
            || c.first_name.toLowerCase() === value.toLowerCase()
    );
    return newCongress;
};

const filterCongressByName = (value, congress) => {
    const newCongress = { ...congress };
    newCongress.members = filter(
        newCongress.members,
        c => c.first_name.toLowerCase().startsWith(value.toLowerCase())
    );
    return newCongress;
}

const filterCongressByParty = (value, congress) => {
    const newCongress = { ...congress };
    newCongress.members = filter(
        newCongress.members,
        c => c.party === value
    );
    return newCongress;
}

const filterCongressByGender = (value, congress) => {
    const newCongress = { ...congress };
    newCongress.members = filter(
        newCongress.members,
        c => c.gender === value
    );
    return newCongress;
}

export default function congress(state = { loading: false, error: false }, action) {
    switch (action.type) {
        case CONGRESS_FETCH_REQUESTED:
            return { ...state, loading: true };
        case FILTER_CONGRESS_BY_ID_REQUESTED:
            return { ...state, loading: true };
        case CONGRESS_FETCH_SUCCEEDED:
            return { ...state, congress: action.congress, originalCongress: action.congress, loading: false, error: false };
        case FILTER_CONGRESS_REQUESTED:
            return { ...state, congress: action.value ? filterCongress(action.value, state.originalCongress) : state.originalCongress, loading: false, error: false };
        case FILTER_CONGRESS_NAME_REQUESTED:
            return { ...state, congress: action.value ? filterCongressByName(action.value, state.originalCongress) : state.originalCongress, loading: false, error: false };
        case FILTER_CONGRESS_PARTY_REQUESTED:
            return { ...state, congress: action.value ? filterCongressByParty(action.value, state.originalCongress) : state.originalCongress, loading: false, error: false };
        case FILTER_CONGRESS_GENDER_REQUESTED:
            return { ...state, congress: action.value ? filterCongressByGender(action.value, state.originalCongress) : state.originalCongress, loading: false, error: false };
        case FILTER_CONGRESS_BY_ID_RECEIVED:
            return { ...state, congressman: action.congressman, loading: false, error: false };
        case ERROR_OCCURRED:
            return { ...state, error: true, loading: false };

        default:
            return state;
    }
}
