import React from 'react'
import img from '../assets/home-right.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='flex flex-col gap-5 text-white bg-[url(./assets/bg2.png)] bg-cover bg-center h-full '>
            <div className='flex flex-col gap-10 sm:gap-0 sm:flex-row  sm:items-center justify-between px-2 py-10 sm:px-5 lg:px-20'>
                <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 bg-yellow-500 rounded-full' src={img} alt="" />
                    <p className='text-2xl font-bold'>Arshad Rahman</p>
                </div>
                <div className='flex gap-5'>
                    <a href='http://www.linkedin.com/in/arshad-rahman1' target='_blank' ><FaLinkedin className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
                    <a href='https://github.com/Arshad-d8' target='_blank' ><FaGithub className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
                    <a href='https://www.instagram.com/arshaaad.__?igsh=djRocWVjaXdiZ3Bi'  target='_blank'><FaInstagramSquare className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
                </div>
            </div>
            <div className='text-center border-t border-t-white/15 py-10'>
                <p>&copy;2025 Arshad All Rights Reserved </p>
            </div>
        </div>
    )
}
