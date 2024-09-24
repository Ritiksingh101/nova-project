import React, { createContext, useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

export const Mydata = createContext()

function Mycontext({ children }) {

  const [showdiv,setShowdiv]=useState("")
  const [search, setSearch] = useState("")

  // const [cart, setcart] = useState(false)
  //  product list data ---------------------

  const [productlist, setProductlist] = useState([])
  useEffect(() => { getproductlistdata() }, [])

  const getproductlistdata = () => {
    axios.get("http://localhost:5001/api/productdetails").then((res) => setProductlist(res.data.data))
  }


  const postlistdata = (value) => {

    axios.post("http://localhost:5001/api/productdetails", value).then((res) => alert("data posted"))
  }

  // ------------------------------------------Cart Functions----------------------------------------------

  const updateCartData = (id, obj) => {
    axios.put("http://localhost:5001/api/userDetail/" + id, obj).then(() => { getdata(); setShowdiv('Cart') })
  }

  // ----------------------------------------------------------------------------------------------------------------------

  // const [search, setSearch] = useState(false)
  const [userdata, setUserdata] = useState([])
  useEffect(() => { getdata() }, [])
  const postdata = (obj) => {

    axios.post("http://localhost:5001/api/userDetail", obj).then(() =>  { getdata();alert("user registered")})


  }
  // data get
  const getdata = (obj) => {
    axios.get("http://localhost:5001/api/userDetail",).then((res) => setUserdata(res.data.data))


  }

  return (
    <Mydata.Provider value={{search, setSearch, showdiv,setShowdiv,  postdata, getdata, userdata, setUserdata, productlist, postlistdata, setProductlist,  updateCartData, getproductlistdata }}>

      {children}
    </Mydata.Provider>
  )
}

export default Mycontext