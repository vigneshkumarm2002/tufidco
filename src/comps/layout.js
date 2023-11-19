import React,{useState} from 'react'
import RouterComp from "./router";
import { HashRouter as Router,  Routes, Route } from "react-router-dom";
import Header from './header'
import NavBar from "./navContainer"
import SignIn from './signin';
const Layout = () => {

    const [showSideBar,setShowSideBar]=useState(false)
  
  console.log("side",showSideBar)
  return (
  <>
 <Routes>
    <Route path="/login" element={<SignIn/>} />
    </Routes>

    <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    <div className="homeContainer">
      <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <RouterComp />
    </div>

   
    </>
  )
}

export default Layout