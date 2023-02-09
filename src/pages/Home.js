import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {

    return(
        <div className="">
            <div className=" my-12 m-auto w-full absolute">
                <h1 className=" text-4xl font-bold text-center">SPOT</h1>
                <h1 className="w-[70%] centerh m-auto text-2xl mt-4 md:mt-2 m-auto w-full text-[.9rem] md:text-[1.2rem] text-black/50 font-semibold absolute text-center">Peer-to-Peer Wireless Communication System using WebRTC</h1>
            </div>
            <div className="w-full h-[90vh] flex justify-center items-center">
                <Link to='/chat'><button className="p-6 px-12 bg-black/90 drop-shadow-xl hover:bg-black transition-all duration-500 ease-in-out rounded-full m-auto text-white font-semibold">Enter Chat</button></Link>
            </div>

            {/*<section id='form' className="absolute text-white w-full centerv h-screen flex items-center justify-center m-auto overflow-y-hidden " id='popup'>
                <div className=" p-16 m-auto flex justify-start drop-shadow-2xl absolute centerv bg-black/70 rounded-3xl  lg:w-1/3 items-center flex-col gap-8">
                <div className="flex flex-col gap-4 justify-center items-center  ">
                    <p>Enter your Name</p>
                    <input className="w-full mt-4 outline-none text-black drop-shadow p-6 w-full  bg-white rounded-full" type='text' placeholder="John Doe" />
                    <button className="p-6 px-12 bg-black/90 w-full drop-shadow-xl hover:bg-black transition-all duration-500 ease-in-out rounded-full m-auto text-white font-semibold">Enter</button>
                    
                </div>
                <Link className="mt-4 underline" to='/'>Go back</Link>
                </div>
                <div className="toppp w-[100rem] fixed bottt bottom-0 h-screen bg-white/40 backdrop-blur-2xl"><br/></div>
            </section>*/}
        </div>
    )
}

export default Home;