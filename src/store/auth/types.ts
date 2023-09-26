import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILURE,
    LOGIN_REQUEST_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE,
} from "./actionType";

export type AuthState = {
    pending: boolean;
    token: "";
    error?: string;
};

// 1. Login
export type LoginPayload = {
    values: {
        email: string;
        username: string;
        password: string;
    };
    callback: any;
};

export type LoginSuccessPayload = {
    token: string;
};

export type LoginFailurePayload = {
    error: string;
};

export type Login = {
    type: typeof LOGIN_REQUEST;
    payload: LoginPayload;
};

export type LoginSuccess = {
    type: typeof LOGIN_REQUEST_SUCCESS;
    payload: LoginSuccessPayload;
};

export type LoginFailure = {
    type: typeof LOGIN_REQUEST_FAILURE;
    payload: LoginFailurePayload;
};

// 2. Signup

export type SignupPayload = {
    values: {
        email: string;
        username: string;
        password: string;
    };
    callback: any;
};

export type SignupSuccessPayload = {
    token: string;
};

export type SignupFailurePayload = {
    error: string;
};

export type Signup = {
    type: typeof SIGNUP_REQUEST;
    payload: SignupPayload;
};

export type SignupSuccess = {
    type: typeof SIGNUP_REQUEST_SUCCESS;
    payload: SignupSuccessPayload;
};

export type SignupFailure = {
    type: typeof SIGNUP_REQUEST_FAILURE;
    payload: SignupFailurePayload;
};

export type AuthAction =
    | Login
    | LoginSuccess
    | LoginFailure
    | Signup
    | SignupSuccess
    | SignupFailure;
