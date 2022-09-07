import React from 'react';
import ImgHome from '../assets/home.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import SocialLinks from './SocialLinks';
const Home = () => {
    const words= ["Front End Dev","JS Enthusiast","Tech Lover","Persistent Learner"]
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });
    return (
        <div className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2  max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start m-auto'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-600 mt-16'>Hi,I'm Niima Chigr👋</h1>
                    <p className='py-6 text-3xl'>I'm a {' '}
                    <span>{text}</span>
                    <Cursor cursorStyle='|' />
                    </p>
                    <div><SocialLinks/></div>
                    <div className='mx-auto my-8'>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Resume</span>
                        </button>
                    </div>
                </div>
                <div>
                    <img className='mx-auto w-2/3 md:m-y-12' src={ImgHome} alt="bg home"/>
                </div>
            </div>
        </div>
)
}

export default Home