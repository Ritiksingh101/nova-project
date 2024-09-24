import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Shopby() {
  const navigate = useNavigate()

  // animation start on skrol
  const [scroll,setScroll]=useState(0)
  const show=()=>{
    setScroll(window.scrollY)
  }
  window.addEventListener("scroll",show)
  return (
    <div className='h-[60vh] w-[100%] flex flex-col items-center '>
    <div className='h-[10vh] w-[100%] flex justify-between items-center'>
        <div className='h-[.1vh] w-[40%] bg-black'></div>
        <div className='text-[25px] font-bold'>Shop By Categories</div>
        <div className='h-[.1vh] w-[40%] bg-black'></div>
    </div>
    <div className={`${scroll>100 ? 'slid-1': null} h-[35vh] w-[90%] flex justify-between  `}>
      {/* {scroll} */}
        <div className='h-[30vh] w-[16%] flex flex-col items-center'><img onClick={()=>{localStorage.setItem("category", "Trimer") ;navigate("/BEARD TRIMMER")}} className='h-[30vh] cursor-pointer' src='https://www.novaindia.co.in/cdn/shop/files/01_1024x1024_crop_center.jpg?v=1632892232'></img>
         <label>Trimmers</label>
        </div>
        <div className='h-[30vh] w-[16%] flex flex-col items-center'><img className='h-[30vh] cursor-pointer' src='https://www.novaindia.co.in/cdn/shop/files/02_b1f94f08-4f61-4840-8518-7406ce595e46_1024x1024_crop_center.jpg?v=1632892262'></img>
         <label>Hair Clippers</label>
        </div>
        {/* <div className='h-[30vh] w-[17%] flex flex-col items-center'><img onClick={()=>navigate("/BEARD TRIMMER")} className='h-[30vh] cursor-pointer' src='https://www.novaindia.co.in/cdn/shop/files/09_fbfb1cff-8daf-49d4-87bb-41128425ba94_1024x1024_crop_center.jpg?v=1632892294'></img>
         <label>Grooming Kit</label>
        </div> */}
        <div className='h-[30vh] w-[17%] flex flex-col items-center'><img onClick={()=>{localStorage.setItem("category", "Ladies Trimmers");navigate("/BEARD TRIMMER")}} className='h-[30vh] cursor-pointer' src='https://www.novaindia.co.in/cdn/shop/files/10_f2e88fb3-cd08-4a69-981a-ca58ed909346_1024x1024_crop_center.jpg?v=1632892318'></img>
         <label>Ladies Trimmers</label>
        </div>
        <div className='h-[30vh] w-[17%] flex flex-col items-center'><img onClick={()=>{localStorage.setItem("category", "Hair Straightener") ;navigate("/BEARD TRIMMER")}} className='h-[30vh] cursor-pointer' src='https://www.novaindia.co.in/cdn/shop/files/04_78adad14-727b-4844-b234-016ae2cea3ac_1024x1024_crop_center.jpg?v=1632892347'></img>
         <label>Hair Straighteners</label>
        </div>
        <div className='h-[30vh] w-[17%] flex flex-col items-center'><img onClick={()=>{localStorage.setItem("category", "Dryer");navigate("/BEARD TRIMMER")}} className='h-[30vh] cursor-pointer' src='https://www.novaindia.co.in/cdn/shop/files/03_f24d1715-eccf-4aef-be8c-e7e2ab930ede_1024x1024_crop_center.jpg?v=1632892414'></img>
         <label>Hair Dryers</label>
        </div>
    </div>

    {/* <div className={` ${scroll>110 ? 'slid-2': null} h-[35vh] w-[100%] flex`}>
        <div className='h-[30vh] w-[16%] flex flex-col items-center'><img className='h-[30vh]' src='https://www.novaindia.co.in/cdn/shop/files/06_04d6fae3-dbdc-4438-a459-50a74c11a854_1024x1024_crop_center.jpg?v=1632892438'></img>
         <label>Home Appliances</label>
        </div>
        <div className='h-[30vh] w-[16%] flex flex-col items-center'><img className='h-[30vh]' src='https://www.novaindia.co.in/cdn/shop/files/05_dcbb5742-c549-4a60-91d3-a1d68f9b81a5_1024x1024_crop_center.jpg?v=1632892468'></img>
         <label>Kitchen Appliances</label>
        </div>
<div className='h-[30vh] w-[17%] flex flex-col items-center'><img className='h-[30vh]' src='https://www.novaindia.co.in/cdn/shop/files/07_b7efad0b-dbea-44cd-b9e4-55c029389792_1024x1024_crop_center.jpg?v=1632892510'></img>
         <label>Health And Fitness
         </label>
        </div>
        <div className='h-[30vh] w-[17%] flex flex-col items-center'><img className='h-[30vh]' src='https://www.novaindia.co.in/cdn/shop/files/11_43800c8b-80ce-4dbf-88d6-bb84331fa2c5_1024x1024_crop_center.jpg?v=1632892534'></img>
         <label>Weighing Scales</label>
        </div>
        <div className='h-[30vh] w-[17%] flex flex-col items-center'><img className='h-[30vh]' src='https://www.novaindia.co.in/cdn/shop/files/12_30791687-6721-439b-9138-4678888a8995_1024x1024_crop_center.jpg?v=1632892555'></img>
         <label>Massagers</label>
        </div>
        <div className='h-[30vh] w-[17%] flex flex-col items-center'><img className='h-[30vh]' src='https://www.novaindia.co.in/cdn/shop/files/08_e7178939-ba54-47fd-88e1-c8bbce722d57_1024x1024_crop_center.jpg?v=1632892582'></img>
         <label>Accessories</label>
        </div>
    </div> */}
</div>
  )
}

export default Shopby