import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/error';
import {
    receiveCongress
} from '../actions/congress';

import CongressService from '../services/congress';

export function* fetchCongressPersons() {
    try {
        const congress = yield call(CongressService.getPersons);
        yield put(receiveCongress(congress.results[0]));
    } catch (err) {
        yield put(handleError(err));
    }
}
