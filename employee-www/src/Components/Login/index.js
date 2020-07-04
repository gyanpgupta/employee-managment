import React, { useState } from 'react'
import { Input, Select, Button, FormControl, MenuItem } from '@material-ui/core'
import { connect } from 'react-redux'
import { getUser } from '../../Redux/User/operations'

function Login(props) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [email, setEmail] = useState('')

  const handleRoleChange = (e) => {
    setIsAdmin(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = () => {
    if (email) {
      props.getUser({ email, isAdmin })
    }
  }

  return (
    <div className="login-form">
      <div className="row">
        <div className="col-8 mx-auto text-center mt-5">
          Email
        </div>
        <div className="col-8 mx-auto text-center">
          <Input type="email" name="email" onChange={handleEmailChange} autoFocus />
        </div>
      </div>
      <div className="row">
        <div className="col-8 mx-auto text-center mt-2">
          Role
        </div>
      </div>
      <div className="row">
        <div className="col-8 mx-auto text-center">
          <FormControl>
            <Select
              labelId="role-label"
              id="role-select"
              value={isAdmin}
              onChange={handleRoleChange}
              className="row"
            >
              <MenuItem value={false}>Employee</MenuItem>
              <MenuItem value={true}>Admin</MenuItem>
            </Select>
            <Button variant="contained" onClick={handleFormSubmit} className="mt-4">Submit</Button>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userReducer: state.userReducer
})

const mapDispatchToProps = {
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)