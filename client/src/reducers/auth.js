import { AUTH, LOGOUT } from '../constants/actionTypes.js'

export default (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            return {...state, authData: action?.payload}
        case LOGOUT:
            localStorage.setItem('profile', JSON.stringify(null))
            return {...state, authData: null}
        default:
            return state
    }
}
