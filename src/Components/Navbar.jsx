import {useState} from 'react'
import {Link} from "react-scroll"
import {FaBars, FaTimes} from "react-icons/fa"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"

const Navbar = () => {
    const [nav, setNav] = useState(false);
   const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "resume",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const sociallinks =[
    {
        id:1,
        child: (
            <>
            <FaLinkedin size = {30}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/rishav-singh-solanki/',
    },
    {
        id:2,
        child: (
            <>
            <FaGithub size = {30}/>
            </>
        ),
        href: 'https://github.com/solankirishav21',
    },
    {
        id:3,
        child: (
            <>
          <SiLeetcode size = {30}/>
            </>
        ),
        href: 'https://leetcode.com/solankirishav21/',
    },
    {
        id:4,
        child: (
            <>
           <HiOutlineMail size = {30}/>
            </>
        ),
        href: 'mailto:solankirishavsingh@gmail.com',
    },
    {
        id:5,
        child: (
            <>
         <BsFillPersonLinesFill size = {30}/>
            </>
        ),
        href: 'https://drive.google.com/file/d/168Ld4FMohajtPxpMdrnQ-OTPfKHqA5er/view?usp=sharing',
    },
]

    const name  = '<Rishav/>'
  return (
    <div className = 'flex justify-between items-center w-full h-16 px-4 text-white bg-black fixed'>
        <div>
    <h1 className="text-3xl font-signature ml-4 ">{name}</h1>
    </div>

    <ul className='hidden lg:flex'>
        {links.map(({id, link})=>(
            <li 
            key ={id} 
            className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-300
            '>
                <Link to={link} smooth duration={500}>{link} </Link>
                </li>
        ))}
    </ul>

        <div 
        className='cursor-pointer pr-4 z-10 text-gray-600 lg:hidden'
        onClick={()=>setNav(!nav)}
        >
            {nav ? <FaTimes size={25} /> :<FaBars size = {25} /> }
        </div>
        
        {nav &&(
          <div className=' absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
            <ul className='flex flex-col justify-center items-center py-14' >
            {links.map(({id, link})=>(
                            <li 
                            key = {id}className='px-4 cursor-pointer capitalize py-6 text-4xl'  >
                                 <Link to={link} smooth duration={500} onClick={()=> setNav(false)}>{link} </Link>
                             </li>
            ))}
            </ul>
      <ul className='flex justify-center items-center py-20 '>
        {sociallinks.map(({id, child, href}) =>(
          <li key ={id} className='px-5'>
            <a href={href} target='_blank' rel="noreferrer">
              {child}
            </a>
          </li>

        ))}
      </ul>
      </div>
        )}
    </div>
  )
}

export default Navbar