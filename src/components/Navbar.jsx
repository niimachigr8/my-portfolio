import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 shadow-lg bg-neutral-50 text-gray-600">
            <div>
                <img src={logo} alt="Logo" style={{width: '150px'}}/>
            </div>
            <ul className='hidden md:flex'>
                    <li> <Link to='home' smooth={true} duration={500}>Home </Link></li>
                    <li><Link to='about' smooth={true} duration={500}>About </Link></li>
                    <li><Link to='skills' smooth={true} duration={500}>Skills </Link></li>
                    <li><Link to='home' smooth={true} duration={500}>Projects </Link></li>
                    <li><Link to='contact' smooth={true} duration={500}>Contact </Link></li>
            </ul>
            

            {/*hamburger*/}
            <div onClick={handleClick}   className='md:hidden z-10'>
                {!menu? <FaBars/> : <FaTimes/>}
            </div>

            <ul className={!menu? 'hidden' :  'absolute top-0 left-0 w-full h-screen bg-slate-500 flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Projects</li>
                    <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar