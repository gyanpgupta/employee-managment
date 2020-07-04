import React, { useState, useEffect } from 'react'
import { TableBody, TableContainer, TableCell, TableHead, Paper, TableRow, Table } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AddEmpDialog from './AddEmpDialog'

function MainPage(props) {

  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogType, setDialogType] = useState('add')
  const [row, setRow] = useState({})
  const { employees, user } = props;
  const handleClose = () => {
    setDialogOpen(false)
  }
  const addButtonClick = () => {
    setRow({})
    setDialogType('add')
    setDialogOpen(true)
  }

  const handleEditClick = (row) => {
    setDialogType('update')
    setRow(row)
    setDialogOpen(true)
  }

  useEffect(() => {
    props.getEmployees() // eslint-disable-next-line
  }, [user.name])

  return (
    <div>
      <AddEmpDialog open={dialogOpen}
        handleClose={handleClose}
        type={dialogType}
        row={row}
        addEmployee={props.addEmployee}
        getEmployees={props.getEmployees}
        updateEmployee={props.updateEmployee}
      />
      <div className="row ml-2">
        <div className="col-8 mx-auto text-center mt-1">
          {user.isAdmin && <button className="btn btn-primary" onClick={addButtonClick}>Add Employee</button>}
        </div>
      </div>
      <div className="row ml-2 mt-4">
        <div className="col-12 text-center">Employees</div>
      </div>
      <div className="mt-3 ml-1 row">
        <TableContainer component={Paper} className="col-12">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Emp Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Email</TableCell>
                {user.isAdmin && <TableCell align="right">Edit</TableCell>}
                <TableCell align="right">Review</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  {user.isAdmin && <TableCell align="right"><button variant="contained" onClick={() => handleEditClick(row)} className="btn btn-primary">Edit</button></TableCell>}
                  <TableCell align="right"><Link to="/reviews" className="btn btn-primary">Review</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default MainPage
