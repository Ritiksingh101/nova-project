import React, { useContext, useState } from 'react'
import { Mydata } from '../Page/Mycontext'
import { useNavigate } from 'react-router-dom'

function HairCareAppliances() {
    const {productlist}=useContext(Mydata)
    const [scroll,setScroll]=useState(0)
    const navigate =useNavigate()

    const [animation, setAnimation] = useState()
    const move = () => {
      setAnimation(window.scrollY)
    }
    window.addEventListener("scroll", move)
    return (
        <div onClick={(i) => {navigate('/product') }} className={`${animation>2900 && 'slid-2'} h-[65vh] w-[100%]`}>
            
            <div className=' h-[10vh] w-[100%] flex items-center justify-center'><div className='h-[5vh] w-[90%] text-[25px] font-bold'>Top Hair Care Appliances</div></div>
             <div className='h-[60vh] w-[100%] flex justify-center gap-2'>
               
               {/* {JSON.stringify(productlist)} */}
               {productlist.map((i,index)=> index>=scroll && index<scroll+4 &&

                 <div className='hide h-[50vh] w-[18%]  flex  flex-col'>
                    <img className='show absolute h-[40vh] w-[18%] opacity-0' src={i.images[1]}></img>
                    <img className=' h-[40vh]  w-[100%] ' src={i.images[0]}></img>
                    <label className='w-[100%]' >{i.title}</label>
                    {/* <label>Runtime: 45 Min Trimmer For Women</label> */}
                    <label><s>{i.price}%</s> <span className='text-[red] font-bold'>{i.price-(i.price*(i.discount/100))}RS</span></label>
                 </div> )}
                 <button onClick={()=>setScroll(scroll+4)}>Next</button>
                 


             </div>
        </div>
    )
}

export default HairCareAppliances