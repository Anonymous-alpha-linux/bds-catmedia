import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { loginRequestSuccess, loginRequestFailure, signupRequestSuccess, singupRequestFailure } from './action';

import { LOGIN_REQUEST, SIGNUP_REQUEST } from './actionType';
import { Action } from 'redux';
import { LoginSuccessPayload } from './types';

function* onLogin({ type }: Action<string>) {
    try {
        const response = 'this is token after calling API';

        yield put(
            loginRequestSuccess({
                token: response,
            }),
        );

        // payload?.callback(response, null);
    } catch (error) {
        yield put(
            loginRequestFailure({
                error,
            }),
        );

        // payload?.callback(null, error);
    }
}

function* onSignup({ type }: Action<string>) {
    try {
        const response = {};
        // payload?.callback(response, null);
    } catch (error) {
        // payload?.callback(null, error);
    }
}

function* watchLoginSaga() {
    yield takeEvery(LOGIN_REQUEST, onLogin);
}

function* watchSignupSaga() {
    yield takeEvery(SIGNUP_REQUEST, onSignup);
}

export default function* authSaga() {
    yield all([fork(watchLoginSaga), fork(watchSignupSaga)]);
}
