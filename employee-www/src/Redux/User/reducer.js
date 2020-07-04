import {
  USER_LOADING,
  SET_USER,
} from './types'

const initialState = {
  currentUser: { name: "anonymous", _id: "1", isAdmin: false },
  isAuthenticated: true,
  isLoading: false,
  loginError: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_USER:
      return {
        ...state,
        currentUser: action.user,
        isLoading: false,
        isAuthenticated: true,
      }
    default:
      return state
  }
}

export default userReducer