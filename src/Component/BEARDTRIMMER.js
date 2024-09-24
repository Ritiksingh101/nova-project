import React, { useContext, useState } from 'react'
import Header from './Header'
import Last from './Last'
import { useNavigate } from 'react-router-dom'
import { Mydata } from '../Page/Mycontext'



function BEARDTRIMMER() {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const navigate = useNavigate()
    const { productlist, setProductlist } = useContext(Mydata)
    return (
        <div>
            <div className='h-[25vh]'><Header></Header></div>
            <div className='flex w-[100%]'>

                <div className='w-[25%] flex justify-center '>



                    <div className='w-[50%] '>
                        <div><label>HOME / </label>
                            <label>Beard Trimmer</label>
                        </div>


                        {/*  */}

                        <div onClick={() => setShow((value) => !value == true)} style={{ height: show == true ? "30vh" : '7vh' }} className=' overflow-hidden duration-1000'>

                            <div className='flex font-bold justify-center gap-3 items-center h-[7vh]'>

                                <div className='font-bold w-[10%] h-[.25vh] bg-black '>
                                    <div style={{ transform: show == true ? `rotate(0deg)` : `rotate(90deg)` }} className='font-bold w-[100%] duration-700 h-[.25vh]  bg-black '></div>
                                </div>
                                <label>BATTERY RUN TIME</label></div>
                            <div class="flex flex-col gap-2">

                                <div class="flex items-center">
                                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label for="checkbox" class="ml-2 text-gray-700">0 - 30 mins</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label for="checkbox" class="ml-2 text-gray-700">31 - 59 mins</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label for="checkbox" class="ml-2 text-gray-700">60 - 90 mins</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label for="checkbox" class="ml-2 text-gray-700">91 - 120 mins</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label for="checkbox" class="ml-2 text-gray-700">121 mins & Above</label>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div onClick={() => setShow1((value) => !value == true)} style={{ height: show1 == true ? "30vh" : '7vh' }} className=' overflow-hidden duration-1000'>

                            <div className='flex font-bold gap-3 items-center h-[7vh] '>

                                <div className='font-bold w-[10%] h-[.25vh] bg-black '>
                                    <div style={{ transform: show1 == true ? `rotate(0deg)` : `rotate(90deg)` }} className='font-bold w-[100%] duration-700 h-[.25vh]  bg-black '></div>
                                </div>
                                <label>TRIMMER TYPE</label></div>
                            <div class="flex flex-col gap-2">

                                <div class="flex items-center">
                                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label for="checkbox" class="ml-2 text-gray-700"> Corded & Cordless</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label for="checkbox" class="ml-2 text-gray-700">Cordless</label>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className='w-[75%]'>
                    <div className='h-[10vh]'></div>
                    <label className='font-bold text-[20px]'>BEARD TRIMMER</label>
                    <div className='h-[5vh]'></div>
                    <div className='h-[10vh] w-[90%] bg-[#F8F8F8] flex justify-end items-center gap-3'><label>short by</label>
                        <div> <select onClick={() => setProductlist(productlist.sort((a, b) => a.price - b.price))} class="bg-white border w-[70%] border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2">
                            <option value="featured">Featured</option>
                            <option value="price-low-to-high">Price, low to high</option>
                            <option value="price-high-to-low">Price, high to low</option>
                            <option value="alphabetical-a-to-z">Alphabetically, A...Z</option>
                            <option value="alphabetical-z-to-a">Alphabetically, Z...A</option>
                            <option value="date-old-to-new">Date, old to new</option>
                            <option value="date-new-to-old">Date, new to old</option>
                            <option value="best-selling">Best Selling</option>
                        </select></div>
                    </div>
                    <div className=' grid grid-cols-3  w-[100%]'>
                        {productlist.filter((i) => i.category == localStorage.getItem("category")).map((i, index) =>
                            <div onClick={() => { localStorage.setItem("novatrimer", JSON.stringify(i)); navigate('/product') }} className='hide h-[60vh] w-[70%]'>
                                {/* {JSON.stringify(productlist)} */}

                                <img className='show absolute object-fill h-[45vh] w-[18%] opacity-0' src={i.images[2]}></img>
                                <img className=' h-[45vh] w-[100%]  ' src={i.images}></img>
                                <label >{i.title}
                                </label>
                                <br></br>
                                <label><s>RS.{i.price}</s> <span className='text-[red] font-bold'>RS.{Math.floor(i.price - (i.price * (i.discount / 100)))}</span></label>
                            </div>)}



                    </div>

                </div>
            </div>

            <div className='h-[60vh] w-[100%] flex justify-center '>
                <div className='w-[80%] font-bold text-[20px]'><label>RECENTLY VIEWED PRODUCTS</label></div>
            </div>
            <Last></Last>

        </div>


    )
}

export default BEARDTRIMMER