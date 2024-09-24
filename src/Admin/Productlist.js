import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import axios from 'axios';
import { Mydata } from '../Page/Mycontext';
import Dashbod from './Dashbod';
import React, { useContext, useEffect, useState } from 'react'
// import { Mydata } from '../Page/Mycontext'

function Productlist() {
  const { productlist, getproductlistdata } = useContext(Mydata)
  

  const deletproductlist = (id) => {
    axios.delete("http://localhost:5001/api/productdetails/" + id).then((res)=>getproductlistdata())
  }
  // const deletproductlist=()=>{
  //     axios.delete("http://localhost:5001/api/productdetails/66a36b495e7fc7b2fcfd65a7",)
  // }

  return (
    <div>
      {/* {JSON.stringify(productlist)} */}


      <div className='w-[100%] flex'>
        <div className='w-[30%]'><Dashbod></Dashbod></div>
        <div className='w-[70%]'>

          <TableContainer >
            <Table sx={{ minWidth: 100 }} aria-label="caption table">

              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>

                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">discount</TableCell>
                  <TableCell align="right">category</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {productlist.map((i) => (
                  <TableRow key={productlist.name}>
                    <TableCell className=' w-[30%]' component="th" scope="row">
                      <div className='w-[100%] grid grid-cols-2'>

                        <img className='h-20 object-contain' src={i.images}></img>
                        <img className='h-20 object-contain' src={i.images[1]}></img>
                        <img className='h-20 object-contain' src={i.images[2]}></img>
                        <img className='h-20 object-contain' src={i.images[3]}></img>
                      </div>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {i.title}
                    </TableCell>
                    <TableCell align="right">{i.price}</TableCell>
                    <TableCell align="right">{i.discount}</TableCell>
                    <TableCell align="right">{i.category}</TableCell>
                    <TableCell align="right"><button onClick={() => deletproductlist(i._id)} >delete</button></TableCell>

                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </TableContainer> </div>
      </div></div>
  )
}

export default Productlist