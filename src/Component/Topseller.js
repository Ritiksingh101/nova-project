import React, { useState } from 'react'

function Topseller() {
  const [scroll,setScroll]=useState(0)
  const show=()=>{
    setScroll(window.scrollY)
  }
  window.addEventListener("scroll",show)
  return (
    <div>
      {/* {scroll} */}
    <div className='h-[90vh] w-[100%] flex justify-center items-center gap-12  '>
        <div className={`${scroll>630 && 'selling'} h-[75vh] w-[42%] hover:cursor-pointer`}>  <img className='rounded-lg' src='https://www.novaindia.co.in/cdn/shop/files/Web_site_Banner_top_selling_trimmers_1024x1024_crop_center.jpg?v=1664878624'></img>  </div>
        <div className={`${ scroll>630 && 'selling'} h-[75vh] w-[42%] hover:cursor-pointer`}>  <img className='rounded-lg' src='https://www.novaindia.co.in/cdn/shop/files/MOST_popular_a021e803-05ce-45a8-b114-4623ef134140_1024x1024_crop_center.jpg?v=1664878655'></img>  </div>
    </div>
    {/*-------------------------------------------------------- Kitchen appliances  */}

    <div className={`${scroll>850 && 'selling'} h-[90vh] w-[100%] flex justify-center items-center gap-12`} >
        <div className='h-[75vh] w-[42%] hover:cursor-pointer'>  <img className='rounded-lg' src='https://www.novaindia.co.in/cdn/shop/files/Kitchen_Appliances_f8d82ede-ad5b-4a77-9590-77ebefa95756_1024x1024_crop_center.jpg?v=1664879890'></img>  </div>
        <div className='h-[75vh] w-[42%] hover:cursor-pointer'>  <img className='rounded-lg' src='https://www.novaindia.co.in/cdn/shop/files/Dry_Iron_1_1024x1024_crop_center.jpg?v=1664881403'></img>  </div>
    </div>

    
    </div>
  )
}

export default Topseller