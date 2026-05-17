import React from 'react'
import { NavLink } from 'react-router'

const SideNavContainer = () => {
  return (
    <div className ="h-[90vh] w-[20vw] bg-black/80 text-2xl  gap-2   text-white flex flex-col font-bold ">
        <NavLink to="/" className='hover:bg-white/20  h-[7vh] pl-4 flex items-center  mt-2 font-bold '>Courses</NavLink>
        <NavLink to="/createcourses" className='hover:bg-white/20 flex items-center  h-[7vh]  pl-4 font-bold' >Create Courses</NavLink>
    </div>
  )
}
export default SideNavContainer
 