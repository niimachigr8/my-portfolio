import React from 'react';
import ImgHome from '../assets/home.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import SocialLinks from './SocialLinks';
const Home = () => {
    const words= ["Front End Developer","Javascript Enthusiast","Tech Lover","Persistent Learner"]
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });
    return (
        <div className='w-full h-screen flex flex-col justify-betwee'>
            <div className='grid md:grid-cols-2  max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-start md:items-start h-full my-10'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-600'>Hi,I'm Niima Chigr👋</h1>
                    <p className='py-6 text-3xl'>I'm a {' '}
                    <span>{text}</span>
                    <Cursor cursorStyle='|' />
                    </p>
                    <div><SocialLinks/></div>
                </div>
                <div>
                    <img className='mx-auto w-2/3 md:m-y-12' src={ImgHome} alt="bg home"/>
                </div>
            </div>
        </div>
)
}

export default Home