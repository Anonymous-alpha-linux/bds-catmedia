import { all, fork } from 'redux-saga/effects';

import AuthSaga from './auth/saga';

export default function* rootSaga(params) {
    yield all([fork(AuthSaga)]);
}
