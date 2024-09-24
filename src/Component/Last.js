import React, { useState } from 'react'

function Last() {
    const [animation, setAnimation] = useState()
    const move = () => {
      setAnimation(window.scrollY)
    }
    window.addEventListener("scroll", move)
    return (
        <div className={`${animation>3400 && 'selling'} h-[80vh] w-[100%] bg-[#F5F5F5] flex flex-col`}>
            <div className='h-[30vh] w-[100%] flex flex-col justify-center items-center gap-3 '>
                <label className='font-bold'>SUBSCRIBE TO OUR NEWSLETTER</label>
                <label>Get the latest updates on new products and upcoming sales</label>
                <div className='gap-10 w-[100%] flex justify-center'><input className=' h-[6vh] outline-none w-[30%] rounded-full ' placeholder='enter your email address'></input>
                    <button className='bg-blue-700 h-[6vh] outline-none w-[12%] rounded-full '>Subscribe</button>
                </div>
            </div>
            <div className='h-[40vh] w-[100%]  flex justify-center'>
                <div className='h-[50vh] w-[22%] flex flex-col items-start gap-5 '>


                    <label className='font-bold'>CATEGORIES</label>

                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Beard Trimmers</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Hair Dryer</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Dry Iron</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Weighing Scale</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Electric Kettle</label>




                </div>



                <div className='h-[50vh] w-[22%] flex flex-col items-start gap-5 '>


                    <label className='font-bold'>CATEGORIES</label>

                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Beard Trimmers</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Hair Dryer</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Dry Iron</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Weighing Scale</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Electric Kettle</label>




                </div>

                <div className='h-[40vh] w-[22%] flex flex-col items-start gap-5 '>
                    
                    <label className='font-bold'>CUSTOMER SERVICE</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >Track My Order</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >FAQ</label>
                    <label className=' hover:border-b-2  hover:border-[#CECECE]  hover:text-[#CECECE]  ' >CSR</label>


                </div>

                <div className='h-[40vh] w-[22%] flex flex-col items-start gap-5 '>
                    <div className='flex gap-5'><i class="fa fa-map-marker text-[30px]" aria-hidden="true"></i> <label>
                        Nova India - No. 32/1, 5th Main Road, Wilson Garden, Siddiah Road Bangalore - 560027 India</label></div>

                    <div className='flex gap-5'><i class="fa fa-phone text-[30px]" aria-hidden="true"></i> <label>

                        Monday To Saturday
                        10 AM TO 5PM</label></div>

                    <div className='flex gap-5'><i class="fa fa-envelope-o text-[30px]" aria-hidden="true"></i> <label>

                        Email: support@novaindia.co.In
                        Team will get back to you within 6 - 12 working hours</label></div>

                        <div className='h-[10vh] w-[100%] gap-4  flex '><label className=' h-[7vh] w-[15%] bg-slate-500 rounded-full flex justify-center items-center'><i class="fa fa-facebook" aria-hidden="true"></i></label>
                        <label className=' h-[7vh] w-[15%] bg-slate-500 rounded-full flex justify-center items-center'><i class="fa fa-instagram" aria-hidden="true"></i></label>
                        <label className=' h-[7vh] w-[15%] bg-slate-500 rounded-full flex justify-center items-center'><i class="fa fa-youtube" aria-hidden="true"></i></label>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Last