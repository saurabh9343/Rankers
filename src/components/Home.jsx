import React from 'react'
import Header from './Header'; 
import Heros from "./Heros";
import Card from "./Card";
import Teachers from  "./Teachers"
import Studends from "./Studends";
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <Header />
      <Heros/>
      <Card />
      <Teachers />
      <Studends />
      <Footer/>
    </>
  )
}

export default Home;