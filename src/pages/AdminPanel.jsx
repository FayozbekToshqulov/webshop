import { BrowserRouter, Routes, Route, NavLink, Navigate, Link } from 'react-router-dom';
import CEO from '../img/myimg.jpg';
import Logo from '../img/logo1.png'



function AdminPanel() {
    return (
        <div>
            <div>
                <div className='bg-black h-[155px] max-sm:pt-10 max-sm:h-[22%]'>
                    <nav className='p-1 max-w-[98%] flex mt-[5%] mx-auto'>
                        <div>
                            <img className='max-sm:w- w-24 h-24 rounded-full border-4 border-white m-3' src={CEO} alt="" />
                            <p className='text-center font-sans text-white'>Islom Qodirov</p>
                        </div>
                        <ul className='max-sm:mt-4 mr-3 text-right max-sm:block flex flex-wrap gap-10 m-auto text-white text-[20px] font-medium'>
                            <li><NavLink to="/adminpanel" >Home</NavLink></li>
                            <li><NavLink to="/dashboard">Shop CRUD</NavLink></li>
                            <li><NavLink to="/aboutp">About CRUD</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Web Shop Admin Panel
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kirish</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Chiqish</button>
                        </div>
                    </div>
                    <div className="mr-[-50px] lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={Logo} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminPanel