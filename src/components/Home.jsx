import React from 'react'
import Plan from './Plan'
import ClientSay from './ClientSay'
import OurTeam from "./OurTeam"
import MidContent from './MidContent'
import Slidebar from './Slidebar'

const Home = () => {
  return (
    <>
    <Slidebar/>
     <Plan/>
     <OurTeam/>
     <MidContent/>
     <ClientSay/>
    </>
  )
}

export default Home;