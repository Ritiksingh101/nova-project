import React, { useContext, useState } from 'react'
import Dashbod from './Dashbod'
import { Mydata } from '../Page/Mycontext'

function Categories() {
  const{productlist}=useContext(Mydata)
  const list=productlist.map((i)=>i.category)
  const Categories =[...new Set(list)]
  const [category,setCategory]=useState("")
  return (
    <div className='w-[100%] flex'>
        <div className='w-[20%]'><Dashbod></Dashbod></div>
        <div className='w-[75%] '>
          {/* {JSON.stringify(category)} */}
          {Categories.map((i)=>
            <button className='w-[20%]' onClick={()=>setCategory(i)}>{i}</button>
          )}
{productlist.filter((i)=>i.category==category).map((i)=>
          <div>
              <img className='h-[10%] w-[10%]' src={i.images}></img>
          </div> )}
            
        </div>
    </div>
  )
}

export default Categories