import React, { useContext } from 'react'
import { Mydata } from '../Page/Mycontext'
import axios from 'axios'

function Cart() {
    const { showdiv, setShowdiv, userdata } = useContext(Mydata)
    const cartdata = JSON.parse(localStorage.getItem("mydata"))
    const data = userdata.find((i) => i?.email == cartdata?.email)
    // const deletecart=(id)=>{
    //     axios.delete("http://localhost:5001/api/userDetail/"+id).then(()=>alert("deleted"))
    // }

    return (
        <div>
            {showdiv == 'Cart' &&

                <div className='w-[100%] h-[100vh] fixed top-0 left-0 z-10'>

                    <div onClick={() => setShowdiv(" ")} className='bg-black w-[100%] h-[100vh] opacity-60 fixed left-0 top-0 '>
                    </div>
                    <div className='bg-white sidebar-popup lg:h-[100vh] h-[60vh] lg:w-[30%] w-[100%] absolute right-0 z-[11]' >
                        {console.log(data)}

                        <button onClick={() => setShowdiv(" ")} className='w-[100%] h-[10vh]  text-[35px] text-start pl-10'>X</button>
                        <div className='w-[100%] h-[60vh] gap-8 pl-10 flex flex-col   '>

                            {data?.cart?.map((i) =>
                                <div className='h-[10vh] w-[100%] gap-7  flex'>

                                    <div className='h-[10vh] w-[20%] ' > <img src={i.product?.images[0]}></img>  </div>
                                    <div className='flex flex-col w-[40%]'>  <label></label>
                                        <label>Qty:{i.product?.quantity}</label>
                                        <label>Price:{Math.floor(i.product?.price - (i.product?.price * (i.product?.discount / 100)))} </label>

                                    </div>
                                    <button  >Delete</button>

                                </div>)}

                            <div className='h-[5vh] w-[90%] font-bold text-[30px]'> <label>Subtotal: </label></div>
                            <button className='h-[7vh] w-[90%] bg-black text-[white]'>View cart</button>
                            <button className='h-[7vh] w-[90%] bg-black text-[white]'>Chekout</button>


                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Cart