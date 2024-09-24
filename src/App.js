import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import BEARDTRIMMER from './Component/BEARDTRIMMER'
import Searchbar from './Component/Searchbar'
import Mycontext from './Page/Mycontext'
import Productdetail from './Component/Productdetail'
import Customer from './Admin/Customer'
import Postdata from './Admin/Postdata'
import Admi from './Admin/Admi'
import Dashbod from './Admin/Dashbod'
import Productlist from './Admin/Productlist'
import Categories from './Admin/Categories'
import Cart from './Component/Cart'


function App() {
  return (
    <Mycontext>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='BEARD TRIMMER' element={<BEARDTRIMMER />}></Route>
          <Route path='Search-bar' element={<Searchbar />}></Route>
          <Route path='product' element={<Productdetail />}></Route>
          <Route path='customer' element={<Customer />}></Route>
          <Route path='data' element={<Postdata />}></Route>
          <Route path='admin' element={<Admi />}></Route>
          <Route path='deshbod' element={<Dashbod />}></Route>
          <Route path='productlist' element={<Productlist />}></Route>
          <Route path='categories' element={<Categories />}></Route>
          <Route path='cart' element={<Cart />}></Route>

        </Routes>
      </HashRouter>
    </Mycontext>

  )
}

export default App