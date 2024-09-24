import React, { useContext, useState } from 'react'
import { Mydata } from '../Page/Mycontext'

function Newlook() {
  const { productlist } = useContext(Mydata)
  const [scroll, setScroll] = useState(0)
  const [animation, setAnimation] = useState()
  const move = () => {
    setAnimation(window.scrollY)
  }
  window.addEventListener("scroll", move)

  return (
    <div className={` ${animation > 1830 && 'selling'} h-[90vh] w-[100%] flex justify-center`}>
      <div className='h-[75vh] w-[55%] hover:cursor-pointe bg-slate-100'>

        
        <div className={`h-[60vh]  flex justify-between`} >

          {/* {JSON.stringify(productlist)} */}
          <button style={{ opacity: scroll == 0 ? 0 : 1 }} onClick={() => {
            if (scroll > 0) {
              setScroll(scroll - 3)
            }
          }}><i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          {/* {productlist.length} */}

          {productlist.map((i, index) => index >= scroll && index < scroll + 3 &&


            <div className='hide h-[50vh] w-[30%]  flex  flex-col'>
              
              <img className='show absolute h-[40vh] w-[16.5%] opacity-0' src={i.images[1]}></img>
              <img className=' h-[40vh]  w-[100%] ' src={i.images[0]}></img>
              <label className='w-[100%]' >{i.title}</label>
              {/* <label>Runtime: 45 Min Trimmer For Women</label> */}
              <label><s>{i.price}%</s> <span className='text-[red] font-bold'>{Math.floor(i.price - (i.price * (i.discount / 100)))}RS</span></label>
            </div>)}
          <button  style={{ opacity: scroll > productlist.length-3 ? 0 : 1 }} onClick={() => {
            if (scroll <= (productlist.length-3)) {
              setScroll(scroll + 3)

            }
          }}><i class="fa fa-arrow-right duration-100" aria-hidden="true"></i></button>

          {/* {scroll} */}

        </div>


      </div>
      <div className='h-[75vh] w-[42%] hover:cursor-pointer'>  <img src='https://www.novaindia.co.in/cdn/shop/files/Step_out_with_new_look_970x.jpg?v=1664885045'></img>  </div>
    </div>
  )
}

export default Newlook