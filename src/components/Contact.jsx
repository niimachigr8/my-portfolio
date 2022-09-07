import React from "react";
import {FiMail} from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div name="contact" className="w-full md:h-[80vh]">
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center '>
                <div className="w-full grid md:grid-cols-2 py-12 gap-8">
                    <div className=" text-gray-600">
                        <p className="text-3xl md:text-5xl font-bold mt-12 text-center md:text-right">Get in touch</p>
                        <p className="py-6 text-2xl text-end">Feel free to reach out if you think we could work together
                            or just want to connect 🚀
                        </p>
                        <div className="flex flex-row justify-center items-center">
                            <FiMail size={30}/>
                            <p className="px-4"> niimachigr@gmail.com</p>
                        </div>
                        <ul className="flex flex-wrap items-end justify-center mt-4">
                                <li>
                                    <a href="https://linkedin.com" className="mr-4 hover:underline md:mr-6"><FaLinkedin size={20} /></a>
                                </li>
                                <li>
                                    <a href="https://github.com/niimachigr8" className="mr-4 hover:underline md:mr-6"><FaGithub size={20}/></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ChigrNiima" className="mr-4 hover:underline md:mr-6"><FaTwitter size={20}/></a>
                                </li>
                            </ul>
                    </div>
                    <div className="w-[80%] m-auto  p-6 rounded-lg shadow-lg bg-zinc-200">
                        <form  method='POST' action="https://getform.io/f/816e71e9-38be-4b68-b88d-0ae3dd321577" >
                            <div className="mt-8 flex flex-col justify-center">
                                <input className="p-2 bg-transparent border border-zinc-400 rounded-md text-gray-600 focus:outline-none" placeholder="Name" name="name"/>
                                <input className="p-2 my-6  bg-transparent border border-zinc-400  rounded-md text-gray-600 focus:outline-none " placeholder="Email" name="name"/>
                                <textarea className="p-2 bg-transparent border  border-zinc-400 rounded-md text-gray-600 focus:outline-none" placeholder="Message" name="message"/>
                                <button className='bg-gray-300 hover:bg-gray-400 text-gray-600 rounded font-bold px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
);
};

export default Contact;