import React from 'react'

//import component
import { navigation } from '../data'

//import link
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-xl'>
        {navigation.map((item,index) => {
          return (
          <div className=" relative group">
            <li key={index} className ='font-medium hover:text-[#A084CA]'>
              <Link 
                to={item.href} 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                duration={500}>
                {item.name}
              </Link>
            </li>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#A084CA] transition-all group-hover:w-full"></span>
          </div>
          )
          })}
      </ul>
    </nav>
  )
}

export default Nav