import React, { useState } from 'react'

function Imgscrpl() {

  const [move, setMove] = useState(0)

  return (
    <div>
      <div className='h-[60vh] relative  w-[100%] bg-slate-600 overflow-hidden' >

        <div className='  h-[60vh] w-[400%] flex' style={{ transform: `translateX(-${move}%)` }} >
          <img className='scrol h-[60vh] w-[100%]' src='https://www.novaindia.co.in/cdn/shop/files/Any_Style.jpg?v=1664868378'></img>
          <img className='scrol h-[60vh] w-[100%]' src='https://www.novaindia.co.in/cdn/shop/files/Kitchen-1.jpg?v=1664877530'></img>
          <img className='scrol h-[60vh] w-[100%]' src='https://www.novaindia.co.in/cdn/shop/files/Mens_Trimmers_banner-2.jpg?v=1664877584'></img>
          <img className='scrol h-[60vh] w-[100%]' src='https://www.novaindia.co.in/cdn/shop/files/Hair_Care_Appliances-1_395ab480-c220-49dd-a215-82ef3e25cb68.jpg?v=1664882887'></img>
        </div>

        <div className='h-[58vh] w-[100%]  absolute top-0'>
          <div className='h-[60vh] w-[100%] flex justify-around text-[30px] items-center'>
            <i class="fa fa-chevron-left cursor-pointer" onClick={() => {
              if (move > 0) {
                setMove(move - 25)
              }
            }} aria-hidden="true"></i>
            <i class="fa fa-chevron-right cursor-pointer" onClick={() => {
              if (move < 75) {
                setMove(move + 25)
              }
            }} aria-hidden="true"></i>
          </div>
          <div className='  flex gap-3 left-[45%] absolute bottom-0 '>
            <div onClick={() => setMove(0)} style={{ backgroundColor: move == 0 ? "red" : null }} className='w-5 h-5  bg-white rounded-[50%] cursor-pointer'></div>
            <div onClick={() => setMove(25)} style={{ backgroundColor: move == 25 ? "red" : null }} className='w-5 h-5  bg-white rounded-[50%] cursor-pointer'></div>
            <div onClick={() => setMove(50)} style={{ backgroundColor: move == 50 ? "red" : null }} className='w-5 h-5  bg-white rounded-[50%] cursor-pointer'></div>
            <div onClick={() => setMove(75)} style={{ backgroundColor: move == 75 ? "red" : null }} className='w-5 h-5  bg-white rounded-[50%] cursor-pointer'></div>
          </div>
        </div>
      </div>
      <div className='flex h[20vh] w-[100%] items-center justify-center'>
        <div className='h-[10vh] w-[80%] flex items-center justify-between k'>
          <label className='flex gap-5 items-center'> <label ><img className='h-[8vh]' src='free-shipping.png'></img></label>Free Shipping</label>
          <label className='flex gap-5 items-center'> <img className='h-[8vh]' src='image.png'></img> Lowest Price Guarantee</label>
          <label className='flex gap-5 items-center'><img className='h-[8vh]' src='achivement.png'></img> Assured Warrenties</label>
        </div>
      </div>
    </div>
  )
}

export default Imgscrpl