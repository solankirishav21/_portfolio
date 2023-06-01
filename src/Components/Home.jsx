// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroImage from "../assets/hero.png"
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md"
import { Link } from 'react-scroll'


const Home = () => {
    const quote ="'"
  return (
    <div name = "home"
    className="w-full bg-gradient-to-b from-black via-black to-gray-900 ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-6xl font-bold text-white pt-28 py-3 mt-44">
                    I{quote}m a <span className="text-yellow-400"> Front End Web Developer.</span>
                </h2>
                <p className="text-gray-200 py-4 max-w-md">Elite top-12 in Xiaomi Ode2Code2.0(2022) || BIT Mesra {quote} 24 || Web Developer- DSC BITM || General Secretary, Entrepreneurship Development Cell || Front-end Developer || C++ Programmer</p>
                <div className='md:mb-5'>
                    <Link to='projects' smooth duration={500} className="cursor-pointer group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 via-blue-600 to-blue-700">
                        Projects 
                        <span className="group-hover:rotate-90 duration-500" > <MdOutlineKeyboardDoubleArrowRight className="ml-0.5"/> </span>
                    </Link>
                </div>
            </div>
            <div className="mb-8  md:ml-5 sm:mb-3 md:-mb-28 lg:pt-10"><img src={HeroImage}  className="rounded-full mx-auto w-2/3 md:w-full"/></div>
        </div>
        </div>

  )
}

export default Home