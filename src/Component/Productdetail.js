import React, { useContext } from 'react'
import Header from './Header'
import Last from './Last'
import { Mydata } from '../Page/Mycontext'


function Productdetail() {
    const novatrimerdetails = localStorage.getItem("novatrimer")
    const details = JSON.parse(novatrimerdetails)

    const myData = JSON.parse(localStorage.getItem("mydata"))
    const { cart, setcart, updateCartData, userdata } = useContext(Mydata)


    const myCartData = userdata.find((i) => i.email == myData.email)?.cart


    return (
        <div>
            {console.log(myData.email)}
            <div><Header></Header></div>
            <div className='h-[7vh] w-[100%]  flex items-center justify-center'><label className='w-[85%]'>Home /
                {details.category
                } /
                {details.title}</label></div>

            <div className='h-[100vh] flex w-[100%] '>
                <div className=' w-[50%]'>
                    <div className='h-[80vh] overflow-hidden  flex justify-center'><img className='hover:scale-[1.2] h-[80vh]' src={details?.images[0]}></img></div>
                </div>
                <div className='h-[80vh] w-[40%] '>

                    <div className="container h-[50vh] w-[85%]  mx-auto">
                        <div className="flex  w-[100%] h-[12vh] justify-between items-center">
                            <h1 className="text-2xl font-bold">{details.title}</h1>
                            <div className="w-28 h-10 rounded-full border-2 border-black  flex justify-center items-center">
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                        {/* <div className="text-gray-500 text-sm mt-2">SKU: NHT 1052 Trimmer</div> */}
                        <div className="flex items-center mt-4">
                            <span className="text-red-500 font-bold text-3xl">RS.{Math.floor(details.price - (details.price * (details.discount / 100)))}</span>
                            <span className="text-gray-500 text-lg ml-4 line-through">RS.{details.price}</span>
                        </div>
                        <div className="mt-4">
                            <h2 className="font-bold text-xl">Check Delivery Availability</h2>
                            <div className="flex items-center mt-2">
                                <input type="text" className="border outline-none border-gray-300 rounded-md px-3 py-2 w-full" placeholder="Postal code e.g. 414001" />
                                <button className=" bg-gray-500   text-white font-bold py-2 px-4 rounded-md ml-4">Check</button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-bold text-lg">Buy this product at:</h3>
                            <button onClick={() => updateCartData(myData._id, { cart: [...myCartData, { product: details, quantity: 1 }] })} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md mt-2 flex items-center">
                                <span className="mr-2">Add to cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-[10vh] w-[100%] flex bg-[#F5F5F5]'>
                <div className='h-[10vh] flex justify-center items-center flex-col  w-[20%] '>
                    <label className='font-bold text-[20px]'>Description</label>
                    <div className='h-[.5vh] w-[40%] bg-yellow-400'></div>

                </div>
                <div className='h-[10vh] flex justify-center items-center flex-col  w-[20%]'>
                    <label className='font-bold text-[20px]'>WARRANTY</label>
                    <div className='h-[.5vh] w-[40%] bg-yellow-400'></div>

                </div>
                <div className='h-[10vh] flex justify-center items-center flex-col  w-[20%]'>
                    <label className='font-bold text-[20px]'>FAQs</label>
                    <div className='h-[.5vh] w-[18%] bg-yellow-400'></div>

                </div>

            </div>
            <Last></Last>
        </div>
    )
}

export default Productdetail