import axios from 'axios'
import React, { useContext, useState } from 'react'
import Dashbod from './Dashbod'
import { json } from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Mydata } from '../Page/Mycontext';





function Postdata() {
  const [value, setValue] = useState({ images: [] })
  const [inputimg, setInputimg] = useState("")
  const {getproductlistdata}= useContext(Mydata)
  // const [img,setImg]=useState([])
  


  const postdata = () => {

    axios.post("http://localhost:5001/api/productdetails", value).then((res)=>{getproductlistdata(); alert("data posted")})
  }
  return (
    <div className='w-[100%] flex'>

      <div className='w-[30%]'><Dashbod></Dashbod></div>

      {/*  */}

      <div className=''>

        <Box className=''
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField id="filled-basic" onChange={(e) => setValue({ ...value, title: e.target.value })} label="Title" variant="filled" />
          <TextField id="filled-basic" onChange={(e) => setValue({ ...value, price: e.target.value })} label="Price" variant="filled" />
          <TextField id="filled-basic" onChange={(e) => setValue({ ...value, discount: e.target.value })} label="Discount" variant="filled" />
          <TextField id="filled-basic" onChange={(e) => setValue({ ...value, category: e.target.value })} label="Category" variant="filled" />
          <TextField id="filled-basic" onChange={(e) => setInputimg(e.target.value)} label="Image" variant="filled" />
          <button className='w-25 h-14 bg-black text-white hover:bg-white hover:text-[black] duration-75' onClick={() => setValue({ ...value, images: [...value.images, inputimg] })}  > Add img</button>

        </Box>
        <div className='  h-16  w-[70%] flex items-center justify-center'>
        <button className=' w-[20%] rounded-lg font-bold text-[20px] hover:bg-slate-500 h-14' onClick={() => postdata(value)} > Submit</button>
        </div>
        <div>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {value.images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={item}
                src={item}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      </div>

      {/*  */}

    


      

      {/* {JSON.stringify(value)}
            {JSON.stringify(inputimg)} */}
     
    
    </div>
  )
}

export default Postdata