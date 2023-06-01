// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"

const SocialLinks = () => {

    const links =[
        {
            id:1,
            child: (
                <>
                Linkedin <FaLinkedin size = {30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/rishav-singh-solanki/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                Github <FaGithub size = {30}/>
                </>
            ),
            href: 'https://github.com/solankirishav21',
        },
        {
            id:3,
            child: (
                <>
                Leetcode <SiLeetcode size = {30}/>
                </>
            ),
            href: 'https://leetcode.com/solankirishav21/',
        },
        {
            id:4,
            child: (
                <>
                Email <HiOutlineMail size = {30}/>
                </>
            ),
            href: 'mailto:solankirishavsingh@gmail.com',
        },
        {
            id:5,
            child: (
                <>
                Resume <BsFillPersonLinesFill size = {30}/>
                </>
            ),
            href: 'https://drive.google.com/file/d/168Ld4FMohajtPxpMdrnQ-OTPfKHqA5er/view?usp=sharing',
            style: 'rounded-br-md'
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
       <ul>
        {links.map(({ id, child, href, style }) => (
        <li
            key ={id}
            className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }>
        <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
            {child}
            </a>
            </li>
        ))}
       </ul>
    </div>
  )
}

export default SocialLinks