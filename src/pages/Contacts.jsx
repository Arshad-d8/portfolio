import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";


export default function Contacts() {

  const [data,setData] = useState({
    name: null,
    phone: null,
    email: null,
    message: null,
  })

  const handleSubmit=(event)=>{
    event.preventDefault()
    const phoneNumber='917306616216'

    const text = `Hello,my name is ${data.name}.
    phone: ${data.phone} 
    email: ${data.email} 
    message: ${data.message}`;

    const url =`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)};`
    window.open(url, "_blank");
  }


  return (
    <div className=' bg-[url(./assets/bg2.png)] text-white bg-cover bg-center h-full px-2 py-20 sm:px-5 sm:py-25 lg:px-20 lg:py-25'>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-10 justify-between'>

          <div className='w-full items-center md:items-center md:text-center py-10 text-center flex flex-col gap-5 rounded-4xl shadow-[0px_0px_10px_1px] shadow-white/15'>
            <p className='text-4xl font-bold '><span className='text-yellow-400'>G</span>et in Touch</p>
            <div className='flex flex-col items-center md:items-center gap-5 ml-1'>
              <p>Available for freelance, full-time, and internship opportunities. Open to collaboration and new challenges.</p>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-4'>
                  <p className='flex items-center text-xl gap-5 group'><MdEmail className='text-2xl group-hover:text-yellow-400' />arshad69as@gmail.com</p>
                  <p className='flex items-center text-xl gap-5 group'><FaPhoneAlt className='text-2xl group-hover:text-yellow-400' />+91 7306616216</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <p>Social Media Links :</p>
                  <div className='flex justify-center md:justify-center gap-5 '>
                    <a href='https://github.com/Arshad-d8' target='_blank' ><FaGithub className='text-4xl hover:text-yellow-400' /></a>
                    <a href='https://www.instagram.com/arshaaad.__?igsh=djRocWVjaXdiZ3Bi' target='_blank' ><FaInstagramSquare className='text-4xl hover:text-yellow-400' /></a>
                    <a href='http://www.linkedin.com/in/arshad-rahman1' target='_blank' ><FaLinkedin className='text-4xl hover:text-yellow-400' /></a>

                  </div>
                </div>
                <a className='flex w-fit px-10 py-2 rounded-lg text-black items-center gap-2 text-lg bg-yellow-500 cursor-pointer' href='/CV.pdf' download="Arshad-Rahman-CV" >Download Resume < MdOutlineFileDownload className='items-center' /> </a>

              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 w-full'>
            <div className='flex flex-col gap-1 text-white'>
              <p className='pl-2 text-lg'>Name:</p>
              <input className='border border-white/20 p-2 rounded-xl' onChange={(e) =>setData((prev)=>({...prev,[e.target.name]:e.target.value,}))}  name='name' value={data.name} type="text" placeholder='Enter your name' />
            </div>
            <div className='flex flex-col gap-1 text-white'>
              <p className='pl-2 text-lg'>Phone:</p>
              <input className='border border-white/20 p-2 rounded-xl' onChange={(e) =>setData((prev)=>({...prev,[e.target.name]:e.target.value,}))} name='phone' value={data.phone} type="number" placeholder='Enter your number' />
            </div>
            <div className='flex flex-col gap-1 text-white'>
              <p className='pl-2 text-lg'>Email:</p>
              <input className='border border-white/20 p-2 rounded-xl' onChange={(e) =>setData((prev)=>({...prev,[e.target.name]:e.target.value}))} name='email' value={data.email} type="email" placeholder='Enter your email' />
            </div>
            <div className='flex flex-col gap-1 text-white'>
              <p className='pl-2 text-lg'>Message:</p>
              <textarea className='border border-white/20 p-2 rounded-xl' onChange={(e) =>setData((prev)=>({...prev,[e.target.name]:e.target.value}))} name="message" value={data.message} rows={5} placeholder='Enter your message'></textarea>
            </div>
            <button type='submit' className='bg-yellow-400 text-black px-10 py-2 rounded-full'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
