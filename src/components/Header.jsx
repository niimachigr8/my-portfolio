import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav'
import NavMobile from './NavMobile';
import logo from '../assets/logo.png'

const Header = () => {
    return(
        <header className='bg-neutral-50 text-gray-600 shadow-lg h-20 flex items-center fixed top-0 z-10 w-full'>
            <div className="container mx-auto flex justify-between h-full items-center">
                {/*logo*/}
                <a href='##'>
                    <img src={logo} alt="Logo" style={{width: '150px'}}/>
                </a>
                {/*Nav*/}
                <div className='hidden lg:inline-block'>
                    <Nav />
                </div> 
                {/*Nav*/}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}
export default Header;