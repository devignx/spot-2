import { Link } from "react-router-dom";
import Recieved from "../components/Recieved";
import Sent from "../components/Sent";
import send from '../assets/icons/send.svg'

const Chat = () => {

    return(
        <div className="">

            <section className="botttt relative" id='members'>
                <div className="w-full flex justify-between px-8 items-center py-6 bg-black/[0.05]">
                    <Link to='/' className="font-semibold toppp hover:text-black/70"><span className="text-xl ">⌂</span> Home</Link>
                    <h1 className="absolute centerh m-auto block w-full text-2xl font-semibold text-center">Members</h1>
                </div>
                <div className="flex justify-evenly w-[40%] my-2 mt-4 m-auto gap-16 items-center p-4 text-lg font-semibold">
                    <p className="hover:text-black/60 cursor-pointer transition-all duration-500 ease-in-out ">Online</p>
                    <p className="hover:text-black/60 transition-all cursor-pointer duration-500 ease-in-out ">Requests</p>
                </div>

                <div>
                    {/*<div className="w-11/12 lg:w-1/2 rounded-2xl overflow-y-scroll p-8 m-auto h-[75vh] bg-black/20 flex flex-col items-center justify-center">
                        <p>No one Online</p>
                        <p className="text-black/40 text-[10rem]">:(</p>
                    </div>*/}
                    <div className="w-11/12 lg:w-1/2 m-auto bg-black/[0.15] rounded-2xl h-[75vh] overflow-y-scroll p-8">
                        <div className="flex justify-between items-center mb-2 rounded-xl p-4 w-full bg-white">
                            <p className="text-md font-semibold">Name#1</p>
                            <button className="text-sm p-3 px-6 text-white bg-black/90 hover:bg-black rounded-full  transition-all duration-500 ease-in-out ">Connect</button>
                        </div>
                        <div className="flex justify-between items-center mb-2 rounded-xl p-4 w-full bg-white">
                            <p className="text-md font-semibold">Name#1</p>
                            <button className="text-sm p-3 px-6 text-white bg-black/90 hover:bg-black rounded-full  transition-all duration-500 ease-in-out ">Connect</button>
                        </div>
                        <div className="flex justify-between items-center mb-2 rounded-xl p-4 w-full bg-white">
                            <p className="text-md font-semibold">Name#1</p>
                            <button className="text-sm p-3 px-6 text-white bg-black/90 hover:bg-black rounded-full  transition-all duration-500 ease-in-out ">Connect</button>
                        </div>
                        <div className="flex justify-between items-center mb-2 rounded-xl p-4 w-full bg-white">
                            <p className="text-md font-semibold">Name#1</p>
                            <button className="text-sm p-3 px-6 text-white bg-black/90 hover:bg-black rounded-full  transition-all duration-500 ease-in-out ">Connect</button>
                        </div>
                        <div className="flex justify-between items-center mb-2 rounded-xl p-4 w-full bg-white">
                            <p className="text-md font-semibold">Name#1</p>
                            <button className="text-sm p-3 px-6 text-white bg-black/90 hover:bg-black rounded-full  transition-all duration-500 ease-in-out ">Connect</button>
                        </div>
                        <div className="flex justify-between items-center mb-2 rounded-xl p-4 w-full bg-white">
                            <p className="text-md font-semibold">Name#1</p>
                            <button className="text-sm p-3 px-6 text-white bg-black/90 hover:bg-black rounded-full  transition-all duration-500 ease-in-out ">Connect</button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="absolute w-full centerv h-screen flex items-center justify-center m-auto overflow-y-hidden " id='popup'>
                <div className="p-16 m-auto flex justify-start drop-shadow-2xl absolute centerv bg-white rounded-3xl w-10/12 lg:w-1/3 items-center flex-col gap-6">
                    <h2 className="mb-4 text-center">Choose mode of Communication</h2>
                    <button className="p-6 px-12 bg-black/90 drop-shadow-xl hover:bg-black transition-all duration-500 ease-in-out rounded-full m-auto text-white font-semibold">Media Share</button>
                    <button className="p-6 px-12 bg-black/90 drop-shadow-xl hover:bg-black transition-all duration-500 ease-in-out rounded-full m-auto text-white font-semibold">Chat Room</button>
                    <Link to='/chat'>Go back</Link>
                </div>
                <div className="toppp w-[100rem] fixed bottt bottom-0 h-screen bg-white/40 backdrop-blur-2xl"><br/></div>
            </section>


            <section className="h-screen w-screen  bg-white absolute top-0" id='chat'>
                <div className="w-full lg:w-[50%]  bg-black/[0.15] p-2 pl-3 h-full  m-auto overflow-y-scroll">
                    <div className="w-full backdrop-blur-xl m-auto centerh fixed toppp top-0 bg-white/[0.45] rounded-xl px-12 text-lg py-4 b drop-shadow-xl flex justify-between items-center">
                        <p>Name</p>
                        <Link to='/' className="p-3 text-sm px-6 bg-black rounded-full text-white">Go Home</Link>
                    </div>
                    <div className="w-full h-10/12 overflow-y-scroll">
                        <div className="flex flex-col mb-[7rem] justify-end">
                            <Recieved/>
                            <Sent/>
                            <Recieved/>
                            <Sent/>
                            <Recieved/>
                            <Sent/>
                            <Recieved/>
                            <Sent/>
                            <Recieved/>
                            <Sent/>
                            <Recieved/>
                            <Sent/>
                            <Recieved/>
                            <Sent/>
                        </div>
                        <form className='relative m-auto'>
                            <input className='outline-none drop-shadow-xl toppp fixed w-11/12 centerh lg:w-[48%] mb-5 border-solid border-[1px] border-white/30 bg-white text-black backdrop-blur-xl rounded-full bottom-0 px-5 py-4 ' type="text" placeholder='Ask here'></input>
                            <img className='p-3 fixed cursor-pointer -bottom-2 md:-bottom-7 toppp right-[6%] lg:right-[27%]  mb-6 md:mb-11 fixed z-[999]' src={send} alt=''  />
                            <div className="w-full lg:w-[50%] backdrop-blur-xl m-auto centerh fixed  bottom-0 bg-white/[0.45] px-12 text-lg py-6 b drop-shadow-xl flex justify-between items-center">
                                <p><br/><br/></p>
                            </div>
                        </form>
                    </div>
                </div>
                </section>

        </div>
    )
}

export default Chat;