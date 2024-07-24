import { NavLink } from 'react-router-dom';
import CEO from '../img/myimg.jpg';

function Orders() {
    return (
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
    )
}

export default Orders