import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/error';
import {
    receiveCongress,
    receiveCongresman
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

export function* fetchCongressman({id}) {
    console.log('sagas', id);
    try {
        const congressman = yield call(CongressService.getPerson, id);
        yield put(receiveCongresman(congressman.results[0]));
    } catch (err) {
        yield put(handleError(err));
    }
}
