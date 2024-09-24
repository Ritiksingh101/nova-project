import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mydata } from '../Page/Mycontext'
import Searchbar from './Searchbar'
import Cart from './Cart'

function Header() {
    const navigate =useNavigate()

    // login data 
    const { postdata,showdiv,setShowdiv } = useContext(Mydata)
    const [uservalue, setUservalue] = useState({})
    const { userdata, setUserdata } = useContext(Mydata)
    const { getdata } = useContext(Mydata)
    useEffect(() => { getdata() }, [])


    // email chake and number
    const [emailvailid, setEmailvailid] = useState(false)
    const [numbervailid, setNumbervailid] = useState(false)

    //  login validation
    const [userlogin, setUserlogin] = useState({})
    const login = () => {
        const user = userdata.filter((i) => i.email == userlogin.email)

        if (user.length > 0) {
            if (user[0].password == userlogin.password) {
                localStorage.setItem("userdata", userlogin.email)

                //----------------------- cart data ------------------------------------------------------------------------------------------
               
                localStorage.setItem("mydata", JSON.stringify(user[0]))
                alert("user logedin")
                setShowdiv ("")
                
                
               

            } else (alert("wrong password"))
        }

    }

    // register vailidation

    const registerValidation = () => {
        const user = userdata.filter((i) => i.email == uservalue.email || i.phone == uservalue.phone)
        if (user.length > 0) {
            setEmailvailid(true)
            setNumbervailid()
        }
        else {
            setCreate(false)
            
            postdata(uservalue)
        }

    }





    const { search, setSearch } = useContext(Mydata)

    const [create, setCreate] = useState(false)
    // const { cart, setcart } = useContext(Mydata)
    // const [show, setShow] = useState(false)
    const [scroll, setScroll] = useState(0)
    const handlescroll = () => {
        setScroll(window.scrollY)
    }
    window.addEventListener("scroll", handlescroll)

    return (
        <div className='h-[23vh]'>
            <div className='h-[15vh] w-[100%] bg-[#16187F] flex flex-col items-center justify-center ' >
                <div className='h-[10vh] w-[85%]   flex justify-between  '>

                    <div className=' w-[20%]'><img className='h-[8vh]' src='https://www.novaindia.co.in/cdn/shop/files/NOVA_LOGO_90a9676e-9d6e-4f33-9db9-831ebf665510.png?v=1634722349'></img></div>
                    <div className='w-[50%] flex justify-between items-center h-[8vh] bg-white rounded-full'>

                        <input onChange={(e)=> setSearch(e.target.value)} onClick={() => setShowdiv('Search')} className='w-[50%] h-[8vh] rounded-full p-5 outline-none' placeholder='Search the store' type='text' />
                        <label className='w-[8%] text-[30px]'><i class="fa fa-search" aria-hidden="true"></i>
                        </label>

                    </div>
                    <div className='flex gap-10'>
                        <div onClick={() => setShowdiv('Sing')} className='flex flex-col items-center cursor-pointer'><i class="fa fa-user-o text-[30px] text-[#C59B3B]" aria-hidden="true"></i>
                            <label onClick={() => setShowdiv('Sing')} className='text-[15px] font-bold text-[white]'>Sing In</label></div>
                        <div onClick={() => setShowdiv ("Cart") } className='flex hover:cursor-pointer flex-col' ><i class="fa fa-shopping-cart text-[30px] text-[#C59B3B]" aria-hidden="true"></i>
                            <label className='text-[15px] font-bold text-[white]'>Cart</label>
                        </div>
                        <Cart></Cart>
                    </div>

                </div>

                {/* ----------------login part------------------- */}

                  {showdiv == 'Sing' && 
                
                <div className='w-[100%] h-[100vh] fixed top-0 left-0 z-10'>
                        <div onClick={() =>setShowdiv("")} className='bg-black w-[100%] h-[100vh] opacity-60 fixed cursor-pointer left-0 top-0 '>
                        </div>
                        <div className='bg-white sidebar-popup lg:h-[100vh] h-[60vh] flex justify-center items-center lg:w-[30%] w-[100%] absolute right-0 z-[11]' >

                            <div className='h-[90vh] w-[85% '>
                                <div className='h-[5vh] text-[20px]  flex justify-between items-center '>
                                    <label className='font-bold'>CUSTOMER LOGIN</label>
                                    <button onClick={() => setShowdiv('')} className=' w-[8%] text-[white] rounded-md bg-[#7F7F7F]'>X</button></div>
                                <div>If you are already registered, please log in.</div>
                                <div className='flex h-[15vh]  flex-col justify-center gap-2'><label className='font-bold'>Email Address</label>
                                    <input type='text' onChange={(e) => setUserlogin({ ...userlogin, email: e.target.value })} placeholder='Email Address' className='border-2 h-[8vh] rounded-full outline-none p-5 '></input>
                                    <label></label>
                                </div>
                                <div className='flex h-[15vh]  flex-col justify-center gap-2'><label className='font-bold'>Password</label>
                                    <input onChange={(e) => setUserlogin({ ...userlogin, password: e.target.value })} type='text' placeholder='Password' className='border-2 h-[8vh] rounded-full outline-none p-5 '></input>
                                </div>

                                <button onClick={() => login()} className='h-[7vh] w-full text-[white] rounded-full bg-blue-400 hover:border-blue-300 border-2 border-black hover:bg-white hover:text-[black] '>Login</button>

                                <div className='h-[8vh] flex justify-center items-center text-[#188CCC]'><label>Forgot your password?</label></div>

                                <div className='h-[.01vh] w-full bg-black'></div>

                                <div className='h-[15vh] flex items-center'><label>Create your account and enjoy a new shopping experience.</label></div>
                                <button onClick={() => setCreate(true)} className='h-[7vh] w-full  rounded-full bg-white hover:border-black border-2 border-blue-400 hover:bg-blue-400 hover:text-[white] '>Create</button>

                            </div>
                        </div>
                        {/*-- --------------------sing up part------------------------- */}

                        {create &&
                            <div className=' sidebar-popup bg-gray-100 lg:h-[100vh] h-[60vh] flex justify-center items-center lg:w-[30%] w-[100%] absolute right-0 z-[11]' >

                                <div className='h-[95vh] w-[85% '>

                                    <div className='h-[5vh] text-[20px]  flex justify-between '>

                                        <label className='font-bold'>CUSTOMER SING UP</label>
                                        <button onClick={() => setCreate(false)} className=' w-[8%] text-[white] rounded-md bg-[#7F7F7F]'>X</button></div>
                                    <div>If you are already registered, please log in.</div>
                                    <div className='flex h-[10vh]  flex-col justify-center gap-2'><label className='font-bold'>Name</label>
                                        <input onChange={(e) => setUservalue({ ...uservalue, name: e.target.value })} type='text' placeholder='Full name' className='border-2 h-[5vh] rounded-full outline-none p-5 '></input>
                                    </div>
                                    <div className='flex h-[15vh]  flex-col justify-center gap-2'><label className='font-bold'>Email Address</label>
                                        <input onChange={(e) => setUservalue({ ...uservalue, email: e.target.value })} type='text' placeholder='Email Address' className='border-2 h-[5vh] rounded-full outline-none p-5 '></input>

                                        {emailvailid &&
                                            <label className='text-[red]'>email already registered</label>}
                                    </div>
                                    <div className='flex h-[15vh]  flex-col justify-center gap-2'><label className='font-bold'>Phone Number</label>
                                        <input onChange={(e) => setUservalue({ ...uservalue, phone: e.target.value })} type='text' placeholder='+9100000' className='border-2 h-[5vh] rounded-full outline-none p-5 '></input>
                                        <div className=' h-[7vh]'>
                                            {numbervailid &&
                                                <label className='text-[red]'>Number already registered</label>} </div>
                                    </div>
                                    <div onChange={(e) => setUservalue({ ...uservalue, password: e.target.value })} className='flex h-[12vh]  flex-col justify-center gap-2'><label className='font-bold'>Password</label>
                                        <input type='text' placeholder='Password' className='border-2 h-[5vh] rounded-full outline-none p-5 '></input>
                                    </div>



                                    <button onClick={() => { registerValidation() }} className='h-[7vh] w-full text-[white] rounded-full bg-blue-400 hover:border-blue-300 border-2 border-black hover:bg-white hover:text-[black] '>Sing up</button>

                                    <div className='h-[8vh] flex justify-center items-center text-[#188CCC]'><label>Forgot your password?</label></div>

                                    <div className='h-[.01vh] w-full bg-black'></div>

                                    <div className='h-[10vh] flex items-center'><label>Login your account and enjoy a new shopping experience.</label></div>
                                    <button onClick={() => setCreate(false)} className='h-[7vh] w-full  rounded-full bg-white hover:border-black border-2 border-blue-400 hover:bg-blue-400 hover:text-[white] '>Login</button>

                                </div>
                            </div>}

                    </div> }

                   
                



                {/* ------------------------Create account------------------------- */}




                {/* ------------------------------cart-------------------------------- */}








            </div>






            <div style={{ position: scroll > 160 ? 'fixed' : null, top: scroll > 160 ? 0 : null }} className='h-[8vh] w-[100%] z-10 bg-[#16187F] text-[white] flex justify-center items-center gap-4'>
                <div className='w-[85%] flex justify-between'>
                    <div className='w-[50%] flex justify-between'>
                        <label>Personal Care</label>
                        <label> Appliances</label>
                        <label onClick={(i)=>{localStorage.setItem("category", "Neckband") ;navigate("/BEARD TRIMMER")}}  >Neckband
                        </label>
                        <label>Accessories

                        </label>
                        <label>Track Order
                        </label>
                        <label>FAQ's</label>
                    </div>
                    <div className='flex' >
                        <label ><img className='h-[4vh]' src='help-desk.png'></img></label>

                        <label>Help</label>

                    </div>

                </div>
                <div className='h-[4vh] w-[.01%] bg-white'></div>


            </div>

            <Searchbar></Searchbar>

        </div>
    )
}

export default Header