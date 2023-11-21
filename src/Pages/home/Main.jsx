// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { Filter,  HeroSection, Layout, Productcard, Track } from "../../components"
import Testimonial from "../../components/testinomials/Testinomial"
import { addToCart, deletefromCart } from "../../redux/CartSlice";


const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
     dispatch(addToCart('shirt'));
  }

  const deletetocart = () => {
     dispatch(deletefromCart('shirt'))
  }
  return (
    <Layout>
       <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deletetocart()}>del</button>
      </div>
     <HeroSection />
     <Filter />
     <Productcard />
     <Track />
     <Testimonial />
    </Layout>
  )
}

export default Home
