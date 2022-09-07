import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen  bg-zinc-500">
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center '>
                <div className="w-full grid md:grid-cols-2 py-12 gap-8">
                    <div className=" text-gray-600">
                        <p className="text-3xl md:text-5xl font-bold mt-16 text-right">Get in touch</p>
                        <p className="py-6 text-2xl text-end">Feel free to reach out if you think we could work together
                            or just want to connect 🚀
                        </p>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-zinc-200">
                        <form  method='POST' action="https://getform.io/f/816e71e9-38be-4b68-b88d-0ae3dd321577" >
                            <div className="mt-8 flex flex-col justify-center">
                                <input className="p-2 bg-transparent border-2 rounded-md text-gray-600 focus:outline-none" placeholder="Name" name="name"/>
                                <input className="p-2 my-6  bg-transparent border-2 rounded-md text-gray-600 focus:outline-none " placeholder="Email" name="name"/>
                                <textarea className="p-2 bg-transparent border-2 rounded-md text-gray-600 focus:outline-none" placeholder="Message" name="message"/>
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