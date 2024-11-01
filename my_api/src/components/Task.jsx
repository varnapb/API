import { Table, TableBody,TableHead, TableCell, TableContainer, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Task = () => {
    var[tak,setTask]=useState([])

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setTask(response.data)
        console.log(tak)
    })
    
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <TableContainer>
            <Table sx={{ border: '2px solid black' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {tak.map((val)=>{
                        return(
                            <TableRow>
                            <TableCell >{val.id}</TableCell>
                            <TableCell >{val.title}</TableCell>
                            </TableRow>
                        )
                     })}
                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Task