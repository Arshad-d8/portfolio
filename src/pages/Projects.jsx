import React from 'react'
import { projects } from '../assets/assets'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className=' flex flex-col gap-5 h-full bg-[url(./assets/bg2.png)] bg-cover px-2 py-20 sm:px-5 sm:py-25 lg:px-20 lg:py-20'>
      <p className='text-white text-center text-4xl font-bold'><span className='text-yellow-500'>M</span>y Projects </p>

      <div className='flex flex-col gap-10 md:mx-20'>
        {projects?.map((item, index) => (
          <div className="relative group bg-[url(./assets/bg2.png)] rounded-3xl text-white overflow-hidden border border-white/10 flex flex-col">
            {/* Image */}
            <img className="w-full h-auto" src={item.image} alt="" />

            {/* Gradient + Label */}
            <div className="absolute flex flex-row-reverse justify-between bottom-0 left-0 right-0 group-hover:h-60 bg-linear-to-t from-black/70 to-transparent group-hover:from-black/60 group-hover:from-30% items-baseline-last">
              <a href={item.link} className="inline-block float-right px-5 m-4 py-1 h-fit text-black bg-yellow-400 rounded-full cursor-pointer">
                Preview
              </a>
              <div className='hidden group-hover:flex flex-col m-4 gap-2'>
                <p className='text-3xl font-bold'>{item.name}</p>
                <p className='text-sm'>{item.description}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}
