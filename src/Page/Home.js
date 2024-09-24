import React from 'react'
import Header from '../Component/Header'
import Imgscrpl from '../Component/Imgscrpl'
import Shopby from '../Component/Shopby'
import Topseller from '../Component/Topseller'
import Newlook from '../Component/Newlook'
import Service from '../Component/Service'
import HairCareAppliances from '../Component/HairCareAppliances'
import HomeAppliances from '../Component/HomeAppliances'
import Last from '../Component/Last'
import Searchbar from '../Component/Searchbar'

function Home() {
  return (
    <div>
        <Header></Header>
        <Searchbar></Searchbar>
        <Imgscrpl></Imgscrpl>
        <Shopby></Shopby>
        <Topseller></Topseller>
        <Newlook></Newlook>
        <Service></Service>
        <HairCareAppliances></HairCareAppliances>
        {/* <HomeAppliances></HomeAppliances> */}
        <Last></Last>
    </div>
  )
}

export default Home