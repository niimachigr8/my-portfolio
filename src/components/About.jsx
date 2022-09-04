import React from 'react'
import { useLottie } from "lottie-react";
import animationData from "../lotties/about.json"
const About = () => {

    const options = {
        animationData: animationData,
        loop: true,
    };
    const { View } = useLottie(options);

return (
    
    <div name = "about" className='w-full h-screen bg-zinc-200 '>
        <div className='flex flex-col justify-center items-center w-full h-full md:pb-12'>
            <div className='grid md:grid-cols-2 max-w-[1000px]  gap-2 w-full'>
                <div className=' m-auto'>
                    <p className='text-4xl font-bold  text-gray-600'>About</p>
                </div>
                <div> </div>
            </div>
            <div className='grid sm:grid-cols-2 max-w-[1000px]  gap-2 w-full px-8'>
                <div className='w-[60%] m-auto'>
                    {View}
                </div>
                <div className=' text-justify m-auto'>
                    <p>
                        Hi There, I'm <span className='font-extrabold'>Niima Chigr</span> I'm a self-motivated and detail-oriented
                        front-end developer with a good understanding of the HTML, CSS ans Javascript concepts necessary 
                        to build interactive and pixel-perfect user interface designs to serve-side back-end
                        programming.
                    </p>
                    <br/>
                    <p>
                        Keen to gain more experience in software development and everything in its orbit through challenging projects.  
                        Excited about learning new technologies and practicing code with a serious focus on 
                        developing scalable and clean code.
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}

export default About