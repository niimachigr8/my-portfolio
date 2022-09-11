import React from 'react';
import ImgHome from '../assets/home.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import SocialLinks from './SocialLinks';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    const words= ["Front End Developer","Tech Lover","Persistent Learner"]
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });
    return (
        <div name="home" className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2  max-w-[1240px] m-auto  text-gray-600 '>
                <div className='flex flex-col justify-center items-center md:items-start m-auto w-full'>
                    <h1 className='text-3xl md:text-5xl font-bold mt-20'>Hi,I'm Niima Chigr👋</h1>
                    <p className='py-6 text-3xl'>I'm a {' '}
                    <span>{text}</span>
                    <Cursor cursorStyle='|' />
                    </p>
                    <div><SocialLinks/></div>
                    <div className='mx-auto my-8'>
                    <Link
                        to="contact"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-800 to-purple-500 cursor-pointer"> Contact me
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                    </div>
                </div>
                <div>
                    <img className='mx-auto w-2/3 lg:w-full' src={ImgHome} alt="bg home"/>
                </div>
            </div>
        </div>
)
}

export default Home