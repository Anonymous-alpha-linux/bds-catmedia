import { AuthAction, AuthState } from "./types";

import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE,
} from "./actionType";

const initialState: AuthState = {
    pending: false,
    token: "",
    error: "",
};

const reducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                pending: true,
            };

        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                pending: false,
                token: action.payload.token,
            };

        case LOGIN_REQUEST_FAILURE:
            return { ...state, pending: false, error: action.payload.error };

        case SIGNUP_REQUEST:
            return { ...state, pending: true };

        case SIGNUP_REQUEST_SUCCESS:
            return { ...state, pending: false, error: "" };

        case SIGNUP_REQUEST_FAILURE:
            return { ...state, pending: false, error: action.payload.error };

        default:
            return state;
    }
};

export default reducer;
