import {takeEvery, all} from 'redux-saga/effects';
import {
    ERROR_OCCURRED
} from '../actions/error';
import {
    CONGRESS_FETCH_REQUESTED,
    FILTER_CONGRESS_BY_ID_REQUESTED
} from '../actions/congress';
import {fetchCongressPersons, fetchCongressman} from './congress';
import handleError from './error';

export default function* root() {
    yield all([
        takeEvery(CONGRESS_FETCH_REQUESTED, fetchCongressPersons),
        takeEvery(FILTER_CONGRESS_BY_ID_REQUESTED, fetchCongressman),
        takeEvery(ERROR_OCCURRED, handleError)
    ]);
}
