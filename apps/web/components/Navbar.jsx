"use client"

import { assets } from './../assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";



export default function Navbar() {

  const [Up, setUp] = useState(false)
  return (
    <>
      <div className=' left-45 sm:left-70 text-3xl font-black italic top-1 lg:hidden  rounded-full  '>
        <h1 className='flex justify-center items-center '><Link href={"/"}
          className='cursor-pointer '>Portfolio</Link></h1></div>
      <nav className="fixed w-full z-50 lg:bg-gradient-to-t from-white to-gray-40 lg:shadow-md px-5 py-3 flex justify-between items-center rounded-full 
                bottom-2 lg:bottom-auto lg:top-0 animate-dropup lg:bg-white/30 lg:backdrop-blur-md">

        <div><Link href={"/"}>

          <Image src={assets.logo}
            alt=''
            width={80}
            height={20}
            className='cursor-pointer rounded-full lg:flex hidden'
          />
        </Link></div>

        <div>
          {!Up && (

            <div className='w-full font-extrabold text-base md:text-2xl lg:text-4xl text-white  rounded-full  p-4 flex justify-center items-center lg:hidden bg-gradient-to-t from-gray-700 to-black'
            >
              <button onClick={() => { setUp(true) }}

                className='cursor-pointer hover:animate-pulse hover:underline flex flex-row justify-center items-center gap-3'>
                <IoMenu />Menu
              </button>
            </div>
          )}

          <ul className=" lg:flex lg:flex-row lg:justify-between gap-10 xl:gap-60 lg:gap-20 text-gray-800 font-medium bg-linear-to-b from-gray-300 to-gray-100 rounded-full py-4 md:px-10  shadow-lg shadow-r-xl hidden md:text-2xl md:font-bold md:max-w-4xl md:gap-5     ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>

            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>


        <div><Link href={"http://localhost:5000/admin"}>
          <Image src={"/profile-img.png"}
            alt=''
            width={80}
            height={20}
            className='cursor-pointer lg:flex rounded-full lg:w-19 hidden'
          />

        </Link></div>

      </nav>


      {/* Mobile ui */}

      {Up &&
        (
          <div className='flex flex-col justify-center items-center lg:hidden '>
            <ul className=" animate-dropup fixed flex flex-col justify-center items-center bottom-5 bg-gradient-to-t from-gray-700 to-black text-white max-w-sm rounded-4xl gap-10 text-base font-bold w-[90%] sm:max-w-md md:max-w-lg p-4 md:p-10">

              <li className="w-full hidden md:flex justify-between items-center">
                <Link href={"/"} onClick={() => setUp(false)}>
                  <Image
                    src={assets.logo_dark}
                    alt="logo"
                    width={50}
                    height={20}
                    className="cursor-pointer rounded-full"
                  />
                </Link>

                <Link href={"/contact"} onClick={() => setUp(false)}>
                  <VscAccount className="cursor-pointer rounded-full text-2xl" />
                </Link>
              </li>


              <li className='hover:animate-bounce hover:underline hover:text-black'>
                <Link href={"/"}
                  onClick={() => setUp(false)}>Home</Link>
              </li>
              <li className='hover:animate-bounce hover:underline hover:text-black'>
                <Link href={"/projects"}
                  onClick={() => setUp(false)}>Projects</Link>
              </li>

              <li className='hover:animate-bounce hover:underline hover:text-black'>
                <Link href={"/contact"}
                  onClick={() => setUp(false)}>Contact</Link>
              </li>

              <button onClick={() => { setUp(false) }}
                className='cursor-pointer '><IoCloseCircle /></button>


            </ul>
          </div>
        )}
    </>
  )
}

