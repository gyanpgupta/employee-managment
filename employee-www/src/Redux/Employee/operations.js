import axios from '../../axiosConfig'
import {
  setEmployees,
  setEmployeesLoading,
} from './actions'

export const getEmployees = () => {
  return dispatch => {
    dispatch(setEmployeesLoading(true))
    axios.get('/user/getEmployees')
      .then(res => {
        dispatch(setEmployees(res.data))
      })
      .catch((err) => {
        if (err.response) console.log(err.response)
        else console.log('Something went worng')
      })
    dispatch(setEmployeesLoading(false))
  }
}

export const addEmployee = (payload) => {
  return () => {
    axios.post('/user/addEmployee', payload)
      .catch((err) => {
        if (err.response) console.log(err.response)
        else console.log('Something went worng')
      })
  }
}

export const updateEmployee = (payload) => {
  return () => {
    axios.post('/user/updateUser', payload)
      .catch((err) => {
        if (err.response) console.log(err.response)
        else console.log('Something went worng')
      })
  }
}