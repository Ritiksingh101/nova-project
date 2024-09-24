import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Mydata } from '../Page/Mycontext';
import Dashbod from './Dashbod';
// import Paper from '@mui/material/Paper';

function Customer() {
    // const[userdata,setUserdata]=useState([])
    const{userdata,setUserdata}=useContext(Mydata)
    
    
    // const getdata=()=>{
    //     axios.get("http://localhost:5001/api/userDetail").then((res)=>setUserdata(res.data.data))
    // }
    const delet=(id)=>{
        axios.delete("http://localhost:5001/api/userDetail/"+id).then(()=>{alert("user removed")})
    }








    
  return (
    <div className='w-[100%] flex'>
      <div className='w-[30%]'><Dashbod></Dashbod></div>
      <div className='w-[70%]'>

    <TableContainer >
      <Table sx={{ minWidth:100 }} aria-label="caption table">
      
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Gmail</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata.map((i)=>(
            <TableRow key={userdata.name}>
              <TableCell component="th" scope="row">
                {i.name}
              </TableCell>
              <TableCell align="right">{i.phone}</TableCell>
              <TableCell align="right">{i.email}</TableCell>
              <TableCell align="right"><button onClick={()=>delet(i._id)} >delete</button></TableCell>
              
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer> </div>
    </div>
  )
}

export default Customer