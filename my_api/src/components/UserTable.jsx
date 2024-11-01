import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const UserTable = () => {
    var[user,setUser]=useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(user)
        setUser(response.data)
    }) 

  return (
    <div>
        <br /><br /><br />
        <TableContainer>
            <Table sx={{ border: '2px solid black' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                     {user.map((val)=>{
                        return(
                            <TableRow>
                            <TableCell >{val.name}</TableCell>
                            <TableCell >{val.email}</TableCell>
                            <TableCell >{val.address.city}</TableCell>
                            </TableRow>
                        )
                     })}
                </TableBody>
            </Table>
        </TableContainer>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default UserTable
