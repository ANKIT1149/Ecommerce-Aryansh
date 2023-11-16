// import React from 'react'

import { useContext } from "react"
import { Layout } from "../../components"
import MyContext from "../../context/data/MyContext"

const Cart = () => {
    const {mode} = useContext(MyContext);
  return (
    <Layout>
      <div style={{color: mode === "dark" ? "white" : "black"}}>
        Cart
      </div>
    </Layout>
  )
}

export default Cart
