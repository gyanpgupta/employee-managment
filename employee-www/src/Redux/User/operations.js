import axios from '../../axiosConfig'
import {
  setUserLoading,
  setUser
} from './actions'

export const getUser = (payload) => {
  console.log(payload)
  return dispatch => {
    dispatch(setUserLoading(true))
    axios.post('/user/getUser', payload)
      .then(res => {
        console.log(res)
        dispatch(setUser(res.data))
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data.msg)
        else console.log('Something went worng')
      })
    dispatch(setUserLoading(false))
  }
}