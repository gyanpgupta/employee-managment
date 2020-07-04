import { combineReducers } from 'redux'

// import reviewReducer from './Review/Reducers'
import employeesReducer from './Employee/reducer'
import userReducer from './User/reducer'

const rootReducer = combineReducers({
  // reviewReducer, 
  userReducer,
  employeesReducer
})

export default rootReducer