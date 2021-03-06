import axios from 'axios'

const initialState = {
  user: {},
  // username: '',
  // email: '',
  // profile_pic: '',
  // points: null,
  // title: '',
  isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'
const ADD_POINTS = 'ADD_POINTS'

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

export function addPoints(point) {
  return {
    type: ADD_POINTS,
    payload: point
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null
  }
}

export function getUser() {
  const payload = axios.get('/api/auth/me')

  return {
    type: GET_USER,
    payload: payload
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true }
    case LOGOUT_USER:
      return initialState
    case GET_USER + '_PENDING':
      return { ...state }
    case GET_USER + '_FULFILLED':
      return { ...state, user: action.payload.data, isLoggedIn: true }
    case GET_USER + '_REJECTED':
      return initialState
    case ADD_POINTS:
      return { ...state }
    default:
      return state
  }
}

