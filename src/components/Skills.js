import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
return (
    <div name="skills" className='h-screen w-full bg-slate-50'>
        <div className='max-w-[1000px] m-auto flex flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold  text-gray-600'>Skills</p>
                <p>Some technologies I've worked with </p>
            </div>

            <div>
                <div className='w-20'>
                    <img src={HTML} alt='HTML logo'/>
                    <p>HTML</p>
                </div>
                <div className='w-20'>
                    <img src={CSS} alt='CSS logo'/>
                    <p>CSS</p>
                </div>
                <div className='w-20'>
                    <img src={JavaScript} alt='Js logo'/>
                    <p>Javascript</p>
                </div>

            </div>
        </div>
    </div>
);

}

export default Skills