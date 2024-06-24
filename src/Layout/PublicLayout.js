import React, { Suspense } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
        <Suspense fallback="">
            <Navbar/>
            
            <Outlet/>
            <Footer/>
        </Suspense>
    </div>
  )
}

export default PublicLayout