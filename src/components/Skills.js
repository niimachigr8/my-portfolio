import React from 'react'
import { FaHtml5, FaJs, FaReact, FaAngular, FaSass} from 'react-icons/fa'
import {SiCss3, SiRedux, SiTailwindcss, SiMaterialui,SiFigma, SiGit} from 'react-icons/si'


const Skills = () => {
    const style = {
        size : 60,
        color: '#525E75'
    }
    const skills = [
        {
            id: 1,
            child :(
                <> <FaHtml5 {...style} />
                </>
            ),
        },
        {
            id: 2,
            child :(
                <> <SiCss3  {...style} /></>
            )
        },
        {
            id: 3,
            child :(
                <> <FaJs  {...style}/></>
            )
        },
        {
            id: 4,
            child :(
                <> <FaReact  {...style}/></>
            )
        },
        {
            id: 5,
            child :(
                <> <SiRedux  {...style}/></>
            )
        },
        {
            id: 6,
            child :(
                <> <FaAngular  {...style}/></>
            )
        },
        {
            id: 7,
            child :(
                <> <FaSass  {...style}/></>
            )
        },
        {
            id: 8,
            child :(
                <> <SiMaterialui  {...style}/></>
            )
        },
        {
            id: 9,
            child :(
                <> <SiTailwindcss  {...style}/></>
            )
        },
        {
            id: 10,
            child :(
                <> <SiFigma  {...style}/></>
            )
        },
        {
            id: 11,
            child :(
                <> <SiGit  {...style}/></>
            )
        },
    ]
return (
    <div name="skills" className='md:h-screen w-full'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center my-16'>
            <div>
                <p className='text-center md:text-left text-4xl font-bold  text-gray-600 '>Tech & Tools</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4  px-12  py-8 gap-8'>
                {skills.map(({id, child,style}) => (
                            <div key={id} className="h-[120px] flex items-center justify-center shadow-md shadow-[#aabace] hover:scale-110 duration-800' ">
                                {child}
                            </div>
                ))}
            </div>
        </div>
    </div>
);

}

export default Skills