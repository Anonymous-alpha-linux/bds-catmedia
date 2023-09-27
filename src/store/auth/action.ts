import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILURE,
    LOGIN_REQUEST_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE,
} from './actionType';

import {
    LoginPayload,
    Login,
    LoginSuccess,
    LoginFailure,
    SignupPayload,
    Signup,
    SignupSuccess,
    SignupFailure,
    LoginSuccessPayload,
    LoginFailurePayload,
    SignupSuccessPayload,
    SignupFailurePayload,
} from './types';

export const loginRequest = (payload: LoginPayload): Login => ({
    type: LOGIN_REQUEST,
    payload,
});

export const loginRequestSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
    type: LOGIN_REQUEST_SUCCESS,
    payload,
});

export const loginRequestFailure = (payload: LoginFailurePayload): LoginFailure => ({
    type: LOGIN_REQUEST_FAILURE,
    payload,
});

export const signupRequest = (payload: SignupPayload): Signup => ({
    type: SIGNUP_REQUEST,
    payload,
});

export const signupRequestSuccess = (payload: SignupSuccessPayload): SignupSuccess => ({
    type: SIGNUP_REQUEST_SUCCESS,
    payload,
});

export const singupRequestFailure = (payload: SignupFailurePayload): SignupFailure => ({
    type: SIGNUP_REQUEST_FAILURE,
    payload,
});
