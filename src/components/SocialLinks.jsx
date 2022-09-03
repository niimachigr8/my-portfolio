import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className='flex justify-between items-center bottom'>
        <ul className='fixed left-0 top-1/4 z-50 px-5 py-3 bg-transparent flex flex-col space-y-3"'>
            <li><><FaLinkedin/></> </li>
            <li><><FaGithub/></> </li>
            <li><FaTwitter/></li>
        </ul>
    </div>
  )
}

export default SocialLinks