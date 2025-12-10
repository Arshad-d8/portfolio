import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import img from '../assets/home-right.png'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";


export default function Navbar() {

  const [show, setShow] = useState(false)

  return (
    <div>
      <div className={`z-11 bg-[url(./assets/bg2.png)] bg-cover h-full p-5  w-1/2 fixed md:hidden transform transition-transform duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`}>
        <div>
          <p className='place-items-end text-white'><IoClose onClick={() => setShow(false)} className='text-3xl' /></p>
        </div>
        <div className='flex flex-col gap-5'>
          <NavLink onClick={() => setShow(false)} to='/' className=' text-white text-xl font-bold'>HOME</NavLink>
          <NavLink onClick={() => setShow(false)} to={'/projects'} className=' text-white text-xl font-bold'>PROJECTS</NavLink>
          <NavLink onClick={() => setShow(false)} to={'/contacts'} className=' text-white text-xl font-bold'>CONTACT</NavLink>
        </div>
      </div>
      <div className='z-10 fixed flex justify-between items-center bg-black/40 rounded-b-full w-screen content-center py-3 px-10 sm:px-20'>


        <div className='flex items-center gap-2'>
          <img className='w-10 h-10 bg-yellow-500 rounded-full' src={img} alt="" />
          <p className=' sm:text-2xl font-bold text-white'>Arshad Rahman</p>
        </div>
        <div className=' hidden md:block h-full content-center font-sans font-medium'>
          <NavLink to='/' className='p-10 text-white'>HOME</NavLink>
          <NavLink to='/projects' className='p-10 text-white'>PROJECTS</NavLink>
          <NavLink to='/contacts' className='p-10 text-white'>CONTACT</NavLink>
        </div>
        <p className='md:hidden text-white text-2xl' onClick={() => setShow(true)}><TiThMenu /></p>
      </div>
    </div>
  )
}
