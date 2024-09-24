import React from 'react'

function HomeAppliances() {
  return (
    <div className='h-[65vh] w-[100%]'>
    <div className=' h-[10vh] w-[100%] flex items-center justify-center'><div className='h-[5vh] w-[90%] text-[25px] font-bold'>Top Home Appliances
See All
</div></div>
     <div className='h-[50vh] w-[100%] flex justify-center'>
       

         <div className='hide h-[50vh] w-[18%]  flex  flex-col'>
            {/* <img className='show absolute h-[40vh] w-[18%] opacity-0' src='https://www.novaindia.co.in/cdn/shop/products/61IoNTjAP3L._SL1100_360x.jpg?v=1654937024'></img> */}
            <img className=' h-[40vh] w-[100%] ' src='https://www.novaindia.co.in/cdn/shop/files/ba_360x.png?v=1689769030'></img>
            <label >BAJAJ SPLENDORA MIXER GRINDER</label>
           
            <label className=' font-bold'>RS. 2,999.00</label>
         </div>
         


     </div>
</div>
  )
}

export default HomeAppliances