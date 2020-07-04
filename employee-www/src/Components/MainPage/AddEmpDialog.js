import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button } from '@material-ui/core'

function AddEmpDialog(props) {
  const [email, setEmail] = useState('')
  const [phoneNumber, setphoneNumber] = useState()
  const [name, setName] = useState('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setphoneNumber(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    setName(props.row.name)// eslint-disable-next-line
    setphoneNumber(props.row.phoneNumber)// eslint-disable-next-line
    setEmail(props.row.email)  // eslint-disable-next-line
  }, [props.open])

  const handleSubmitClick = () => {
    if (email && name && phoneNumber && props.type === "add") {
      props.addEmployee({ email, name, phoneNumber })
      props.handleClose()
      props.getEmployees()
    }
    else if (email && name && phoneNumber && props.type === "update") {
      props.updateEmployee({ email, name, phoneNumber })
      props.handleClose()
      props.getEmployees()
    }
  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" fullWidth >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          {props.type === "add" &&
            <div className="row mt-1">
              <div className="col-8 mx-auto text-center">
                <TextField label="email" value={email} onChange={handleEmailChange} autoFocus />
              </div>
            </div>
          }
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <TextField label="Name" value={name} onChange={handleNameChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <TextField label="Phone Number" value={phoneNumber} onChange={handlePhoneChange} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitClick} color="primary">
            {props.type}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddEmpDialog