import './App.css';
// import Dashboard from './pages/Dashboard.jsx'
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Header from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';

import Logo from './img/logo1.png';
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import AddToCard from './pages/AddToCard.jsx';
import Contact from './pages/Contact.jsx';
import ProtectRouteAdmin from './protectedRoutes/ProtectRouteAdmin.jsx';
import { Fragment, useState, useEffect } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import AdminPanel from './pages/AdminPanel.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Orders from './pages/Orders.jsx';
import Aboutp from './pages/Aboutp.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cards")) || [];
    setCount(cartItems.length);
  }, []);

  const handleShow = () => {
    setShow(!show);
    let root = document.getElementsByTagName("html")[0];
    show ? root.style.overflowY = "auto" : root.style.overflowY = "hidden";
  }

  let user = localStorage.getItem("users");

  const logOut = () => {
    localStorage.removeItem('users');
    window.location.reload();
    <Navigate to={'/'} />
  };

  return (
    <BrowserRouter>
      <div className='w-[100%] bg-[#F6F5F5]'>
        <div className="navbar">
          <img src={Logo} alt="" className=' w-[150px] h-[50px]' />
          <nav className='max-lg:hidden max-sm:hidden my-[12px] ml-[13%]'>
            <ul className='flex gap-20 m-auto'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              {user && <li><NavLink to="/adminpanel">Admin Panel</NavLink></li>}
            </ul>
          </nav>
          <RiMenu3Fill className='hidden max-lg:block max-sm:block text-[35px]' onClick={handleShow} />
          {show && (
            <Fragment>
              <div onClick={handleShow} className='w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] absolute top-0 left-0'></div>
              <div className='w-[100%] h-[100vh] bg-white top-0 left-0 z-50 absolute'>
                <div className='flex items-center w-[82%] m-auto'>
                  <img src={Logo} alt="" className='mt-2.5 ml-0.5 w-[150px] h-[50px]' />
                  <IoMdClose className='text-[40px] mt-3 ml-auto' onClick={handleShow} />
                </div>
                <hr className='bg-black m-auto max-w-[70%] mt-5' />
                <div>
                  <nav className='max-w-[90%] mt-[10%] m-auto text-center'>
                    <ul className='flex flex-col gap-10 m-auto text-black'>
                      <li><NavLink to="/" onClick={handleShow}>Home</NavLink></li>
                      <li><NavLink to="/about" onClick={handleShow}>About</NavLink></li>
                      <li><NavLink to="/shop" onClick={handleShow}>Shop</NavLink></li>
                      <li><NavLink to="/contact" onClick={handleShow}>Contact</NavLink></li>
                      {user && <li><NavLink to="/adminpanel" onClick={handleShow}>Admin Panel</NavLink></li>}
                    </ul>
                  </nav>
                </div>
                <div className=' flex w-full mx-[42%] my-[15%] text-black'>
                  <ul>
                    {!user && <li><NavLink to={"signin"}><MdOutlineAdminPanelSettings className='text-[25px] text-center mr-3' onClick={handleShow}/></NavLink></li>}
                  </ul>
                  <ul>
                    <li><small className='text-blue-600 absolute text-[15px] ml-[7%] font-bold mt-[-3%]'>{count}</small><NavLink to={"addtocard"}><LiaShoppingBasketSolid className='text-center text-[25px] mr-5' onClick={handleShow}/></NavLink></li>
                  </ul>
                  <ul>
                    {user && <li><NavLink><IoExitOutline onClick={logOut} className='text-[25px] mr-5 text-red-600'/></NavLink></li>}
                  </ul>
                </div>
              </div>
            </Fragment>
          )}
          <div className='max-lg:hidden max-sm:hidden flex my-[12px] ml-[15%]'>
            <ul>
              {!user && <li><NavLink to={"signin"}><MdOutlineAdminPanelSettings className='text-[25px] mr-[30px]' /></NavLink></li>}
            </ul>
            <ul>
              <li><small className='text-blue-600 absolute text-[15px] ml-[1.4%] font-bold mt-[-0.7%]'>{count}</small><NavLink to={"addtocard"}><LiaShoppingBasketSolid className='text-[25px] mr-[30px]' /></NavLink></li>
            </ul>
            <ul>
              {user && <li><NavLink><IoExitOutline onClick={logOut} className='text-[25px] text-red-600 mr-[30px]' /></NavLink></li>}
            </ul>
          </div>
        </div>
      </div>

      {/* <Header /> */}

      <Routes>
        <Route element={<Header />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Shop count={count} setCount={setCount} />} path='/shop' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<SignIn />} path='/signin' />
        <Route element={<AddToCard />} path='/addtocard' />
        <Route element={<ProtectRouteAdmin><Aboutp /></ProtectRouteAdmin>} path='/aboutp' />
        <Route element={<ProtectRouteAdmin><Orders /></ProtectRouteAdmin>} path='/orders' />
        <Route element={<ProtectRouteAdmin><Dashboard /></ProtectRouteAdmin>} path='/dashboard' />
        <Route element={<ProtectRouteAdmin><AdminPanel /></ProtectRouteAdmin>} path='/adminpanel' />
      </Routes>


    </BrowserRouter>
  )
}

export default App;
