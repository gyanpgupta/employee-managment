import { EMPLOYEES_LOADING, SET_EMPLOYEES } from './types'

export const setEmployeesLoading = (isLoading) => ({
  type: EMPLOYEES_LOADING, isLoading
})

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  employees
})
