import {USER_LOADING, SET_USER} from './types'

export const setUserLoading = (isLoading) => ({
  type: USER_LOADING, isLoading
})

export const setUser = (user) => ({
  type: SET_USER,
  user
})
