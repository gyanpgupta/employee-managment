import {
  EMPLOYEES_LOADING,
  SET_EMPLOYEES,
} from './types'

const initialState = {
  employees: [],
  isLoading: false,
}

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.employees.employees,
        isLoading: false,
      }
    default:
      return state
  }
}

export default employeesReducer