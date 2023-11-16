/* eslint-disable react/prop-types */
// import React from 'react'

import {Navbar, Footer} from "../../components/index"


const Structure = ({children}) => {
  return (
    <>
    <Navbar />
    <div className="content">
       {children}
    </div>
    <Footer />
    </>
  )
}

export default Structure
