// import React from 'react'

import { Filter, Footer, HeroSection, Layout, Productcard, Track } from "../../components"
import Testimonial from "../../components/testinomials/Testinomial"


const Home = () => {
  return (
    <Layout>
     <HeroSection />
     <Filter />
     <Productcard />
     <Track />
     <Testimonial />
    </Layout>
  )
}

export default Home
