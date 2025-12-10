import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function RecentProject() {
  return (
    <div className=' bg-[url(./assets/bg2.png)] flex flex-col gap-10 bg-cover bg-center h-full px-2 py-20 sm:px-5 sm:py-25 lg:px-30 lg:py-20'>
      <div className='flex flex-col gap-5 md:gap-0 md:flex-row  justify-between sm:items-center'>
        <p className='text-white text-4xl font-bold'><span className='text-yellow-500'>R</span>ecent Project </p>
        <Link className='text-yellow-500 font-semibold  text-xl rounded-lg flex items-center gap-x-3 cursor-pointer' to={'/projects'}>Explore More Works <MdArrowOutward className='lg:text-2xl mt-1' /> </Link>
      </div>
      <div className="relative h-130 rounded-2xl group flex items-center justify-center">
        <div className="absolute inset-0 bg-[url(./assets/recent-pro.jpg)] bg-cover bg-center rounded-2xl transition-opacity duration-300 group-hover:opacity-70"></div>

        <Link className="relative hidden group-hover:flex bg-yellow-400 text-black font-semibold px-5 py-2 text-xl rounded-lg gap-x-3 md:text-sm lg:text-lg" to={"/projects"}>
          View Project <MdArrowOutward className="lg:text-2xl mt-1" />
        </Link>
      </div>


    </div>
  )
}
