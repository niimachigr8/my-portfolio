import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';
import { navigation } from '../data';
import {motion} from 'framer-motion'

const Navmobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen)
  //framer motion variants
  const circleVariants = {
    hidden : { scale : 0},
    visible : {
      scale:100, 
      transition : { type:'spring', stiffness : 160, damping: 60}
    }
  };
  const ulVariants = {
    hidden : {opacity: 0},
    visible: {
      opacity:1, 
      transition: { delay: 0.1}}
  }
  return (
    <nav className='relative'>
      <div  onClick={() => setIsOpen(true)}
        className='cursor-pointer'>
        <FaBars className='w-8 h-8 mr-4'/>
      </div>

      <motion.div 
        variants={circleVariants} 
        initial='hidden' 
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4  h-4 rounded-full fixed top-0 right-0 bg-[#A8A4CE]"
      >
      </motion.div>
      <motion.ul
        variants={ulVariants} 
        initial='hidden' 
        animate={isOpen ? 'visible' : 'hidden'}
        className = {`${isOpen ? 'right-0' : 'right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div onClick={() => setIsOpen(false)} className='cursor-pointer absolute top-8 right-8'>
          <FaTimes className='w-8 h-8' />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className='mb-8'>
              <Link
                onClick={handleClick}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-2xl cursor-pointer capitalize text-white font-medium'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  )
}

export default Navmobile