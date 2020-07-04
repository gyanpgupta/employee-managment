import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEmployees, addEmployee, updateEmployee } from '../../Redux/Employee/operations'
import Login from '../Login'
import MainPage from '../MainPage'

function App(props) {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainPage
            getEmployees={props.getEmployees}
            employees={props.employees}
            user={props.user}
            addEmployee={props.addEmployee}
            updateEmployee={props.updateEmployee}
          />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          404 Page not found.
        </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  user: state.userReducer.currentUser,
  employees: state.employeesReducer.employees
})

const mapDispatchToProps = {
  getEmployees,
  addEmployee,
  updateEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(App)