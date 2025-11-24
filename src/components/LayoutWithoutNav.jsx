import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutWithoutNav = () => {
  return (
    <>
     <Outlet/>
    </>
  )
}

export default LayoutWithoutNav