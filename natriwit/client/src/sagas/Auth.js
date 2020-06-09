import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import actions from '../actions'
import { END_POINT } from '../constants/actionTypes'

/****************Auth*****************/
// Sign In
function asyncSignIn(payload) {
    return axios.post(END_POINT + 'user/login', {
        payload
    }).then(response => response.data)
        .catch(err => console.log(err));
}
export function* actionSignIn(data) {
    const { payload } = data
    const response = yield call(asyncSignIn, payload);

    yield put(actions.SignInAsync(response))
}

// Sign Up
function asyncSignUp(payload) {
    return axios.post(END_POINT + 'user/register', {
        payload
    }).then(response => response.data)
        .catch(err => console.log(err));
}
export function* actionSignUp(data) {
    const { payload } = data
    const response = yield call(asyncSignUp, payload);

    yield put(actions.SignUpAsync(response))
}

// Verify Sign Up
function asyncVerifySignUp(payload) {
    return axios.get(END_POINT + 'user/register?code=' + payload)
        .then(response => response.data)
        .catch(err => console.log(err))
}

export function* actionVerifySignUp(data) {
    const { payload } = data;
    const response = yield call(asyncVerifySignUp, payload)

    yield put(actions.VerifySignUpAsync(response))
}

// Forgot password
function asyncForgotPassword(payload) {
    return axios.post(END_POINT + 'user/forget-password', {payload})
        .then(response => response.data)
        .catch(err => console.log(err))
}

export function* actionForgotPassword(data) {
    const {payload} = data;
    const response = yield call(asyncForgotPassword, payload)

    yield put(actions.ForgotPasswordAsync(response))
}

// Forgot with change password
function asyncChangePassword(payload) {
    return axios.put(END_POINT + 'user/verify', {payload})
        .then(response => response.data)
        .catch(err => console.log(err))
}

export function* actionChangePassword(data) {
    const {payload} = data;
    const response = yield call(asyncChangePassword, payload)

    yield put(actions.ChangePasswordAsync(response))
}