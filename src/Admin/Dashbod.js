import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashbod() {
    const[product,setProduct]=useState(false)
    const [customer,setCustomer]=useState(false)
    const navigate=useNavigate()
  return (
    <div className="flex h-screen w-64 bg-gray-100">
    <div className="flex flex-col w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-16 bg-blue-500 text-white font-bold text-xl">
            <div className="flex items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="ml-2">Admin</span>
            </div>
        </div>
        <div className="flex items-center px-4 py-2 mt-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7 7 7-7m-14 6l2 2 5 5 5-5m-14 4l2 2 5 5 5-5" /></svg>
            <div className="ml-4">Dashboard</div>
        </div>
        <div onClick={()=>setProduct((value)=>!value)} className="flex items-center px-4 py-2 mt-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-4-4H4a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V11a4 4 0 00-4-4H6m3 4h2" /></svg>
            <div  className="ml-4">Products</div>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div> 
        {product &&
        <div className="ml-12">
            <div onClick={()=>navigate("/data")} className="px-4 py-2 cursor-pointer mt-2 text-gray-500">Add product</div>
            <div onClick={()=>navigate("/productlist")} className="px-4 py-2 cursor-pointer mt-2 text-gray-500">Product list</div>
            <div onClick={()=>navigate("/categories")} className="px-4 py-2 cursor-pointer mt-2 text-gray-500">Categories</div>
            
        </div> }
       
        <div onClick={()=>setCustomer((value)=>!value)} className="flex items-center px-4 py-2 mt-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2V10.338c0-1.671.825-2.93 2.103-3.522L13.695 6.758c.314-.314.815-.528 1.357-.528h6a2 2 0 012 2v14a2 2 0 01-2 2h-3m-6 4l-2-2m0 0l-2-2m2 2l2 2" /></svg>
            <div className="ml-4">Customers</div>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
        {customer &&
        <div className="ml-12">
            {/* <div  className="px-4 py-2 mt-2 cursor-pointer text-gray-500">Add Customer</div> */}
            <div onClick={()=>navigate("/customer")} className="px-4 py-2 cursor-pointer mt-2 text-gray-500">Customer list</div>
            <div className="px-4 py-2 mt-2 text-gray-500"></div>
            
        </div>
}
      
      
        
    </div>
   
</div>
  )
}

export default Dashbod