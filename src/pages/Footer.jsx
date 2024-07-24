import './Footer.css';
import Logo from '../img/logo1.png';
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


function Footer() {
    return (
        <div className='footer'>

            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={Logo} alt="" className=' w-[150px] h-[50px] m-5' />
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Web Shop can be ordered <font className="text-blue-500 font-bold font-san">24/7</font> !</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">SHOPPING</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">ACCESSORIES FOR COMPYUTER</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">BOOKS FOR PROGRAMMERS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">SERVICES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-700">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2024 Web Shop
                            creator —
                            <a href="https://t.me/islomqodirov579" rel="noopener noreferrer" className="text-yellow-4  00 ml-1" target="_blank">DEVELOPER</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-white text-[25px]">
                                <FaTelegramPlane />
                            </a>
                            <a className="ml-3 text-white text-[25px]">
                                <FaInstagram />
                            </a>
                            <a className="ml-3 text-white text-[25px]">
                                <FaYoutube />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer