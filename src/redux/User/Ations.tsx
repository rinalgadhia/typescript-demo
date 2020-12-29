import * as types from './ActionTypes'
export const fetchUserRequest = () => {
    return {
        type: `${types.FETCH_USER_REQUEST}`,
    }
}

export const fetchUserSuccess = (users: object) => {
    return {
        type: `${types.FETCH_USER_SUCCESS}`,
        payload: users
    }
}

export const fetchUserFailure = (error: string) => {
    return {
        type: `${types.FETCH_USER_FAILURE}`,
        payload: error,
    }
}