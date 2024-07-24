import './Home.css';
import { TbShoppingCartCode } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Footer from './Footer';
import HP from '../img/hp.png';
import MI from '../img/mi.png';
import Logo from '../img/logo1.png';

import { FcShipped } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { FcClock } from "react-icons/fc";


function Header() {
  return (
    <div className='bg-white'>
      <header className='head'>
        <div className='head-main'>
          <h1>Techomaniac</h1>
          <h4>Incredible Prices on All Your Favorite Items</h4>
          <button className='button'>Order Now</button>
        </div>
      </header>
      <div className='mt-[2px] border-black'>
        <marquee behavior="" direction="right" scrollamount="10">
          <div className="w-full flex gap-10">
            <img className='h-[100px] p-4' src={Logo} alt="" />
            <img className="h-[100px]" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/apple_logo_icon_168588.png" alt="" />
            <img className="h-[100px]" src="https://pngfre.com/wp-content/uploads/nike-logo-18.png" alt="" />
            <img className="h-[100px]" src="https://1000logos.net/wp-content/uploads/2023/10/Loro-Piana-Logo.png" alt="" />
            <img className="h-[100px]" src="https://freelogopng.com/images/all_img/1691604371samsung-logo-png-black.png" alt="" />
            <img className="h-[100px]" src={HP} alt="" />
            <img className="h-[100px]" src="https://1000logos.net/wp-content/uploads/2021/06/Tom-Ford-logo.png" alt="" />
            <img className='h-[100px]' src="https://freepngimg.com/save/32021-lenovo-logo-transparent-image/430x190" alt="" />
            <img className='h-[100px]' src="https://cdn.icon-icons.com/icons2/3911/PNG/512/acer_logo_icon_247729.png" alt="" />
            <img className='h-[100px]' src={MI} alt="" />
            <img className='h-[100px]' src="https://www.futuristicgroup.com/wp-content/uploads/2016/05/polo-ralph-lauren-logo-vectorlogofree-2015.png" alt="" />
            <img className='h-[100px] p-3' src={Logo} alt="" />
          </div>
        </marquee>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center bg-white rounded-full text-white flex-shrink-0">
                    <FcClock className='text-[30px]' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Returns <font className="text-indigo-500">5 days</font></h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center p-1 bg-white rounded-full text-white flex-shrink-0">
                    <FcOvertime className='text-[30px]' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Working time <font className="text-indigo-500">7/24</font></h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center bg-white p-1 rounded-full text-white flex-shrink-0">
                    <FcShipped className='text-[30px]' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Delivery time <font className="text-indigo-500">1 day</font></h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main">
        <h1 className='text-center mt-10 text-[40px] font-[san]'>Explore our range</h1>
        <div className="max-w-[1200px] m-auto flex flex-wrap px-5 mt-10">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative ">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-[30px] border-[3px] border-blue-500" src="https://www.ismartrecruit.com/upload/blog/main_image/6_ways_to_find_and_hire_developers_at_a_low_cost.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-[3px] border-blue-500 rounded-[30px] bg-white opacity-0 hover:opacity-100 active:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Services</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <button className='border-2 border-solid border-blue-500 text-[15px] mt-3 font-mono px-3 rounded-[5px]'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-[30px] border-[3px] border-blue-500" src="https://i.etsystatic.com/23518642/r/il/79cee2/4366246128/il_570xN.4366246128_a0f3.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-[3px] border-blue-500 rounded-[30px] bg-white opacity-0 hover:opacity-100 active:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Accessories for Computers</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <button className='border-2 border-solid border-blue-500 text-[15px] mt-3 font-mono px-3 rounded-[5px]'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-[30px] border-[3px] border-blue-500" src="https://gepard.io/uploads/eCommerce-Site-Search-Trends-From-Expert.svg" />
              <div className="px-8 py-10 relative z-10 w-full border-[3px] border-blue-500 rounded-[30px] bg-white opacity-0 hover:opacity-100 active:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Shopping</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <button className='border-2 border-solid border-blue-500 text-[15px] mt-3 font-mono px-3 rounded-[5px]'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-[30px] border-[3px] border-blue-500" src="https://images.uzum.uz/clmu1bt6sfhsc0un89g0/original.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-[3px] border-blue-500 rounded-[30px] bg-white opacity-0 hover:opacity-100 active:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Stickers</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <button className='border-2 border-solid border-blue-500 text-[15px] mt-3 font-mono px-3 rounded-[5px]'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-[30px] border-[3px] border-blue-500" src="https://i.pinimg.com/564x/47/90/ed/4790edb2a6b652cd975078d7c1bbdad3.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-[3px] border-blue-500 rounded-[30px] bg-white opacity-0 hover:opacity-100 active:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Accessories for Phones</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <button className='border-2 border-solid border-blue-500 text-[15px] mt-3 font-mono px-3 rounded-[5px]'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-[30px] border-[3px] border-blue-500" src="https://i.pinimg.com/564x/b4/e3/51/b4e3510960b0d967e157e9494b08575d.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border-[3px] border-blue-500 rounded-[30px] bg-white opacity-0 hover:opacity-100 active:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Books for Programmers</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <button className='border-2 border-solid border-blue-500 text-[15px] mt-3 font-mono px-3 rounded-[5px]'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='my-[5%]'>
          <img className='w-full' src="https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg" alt="" />
          {/* <img className='w-full' src="https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg" alt="" /> */}
          {/* <img className='w-[100%]' src="https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-a-home-office-with-a-white-table-and-a-laptop-image_13150854.jpg" alt="" /> */}
          {/* <img src="https://wallpapers.com/images/hd/4k-laptop-programming-screen-qqc7448qd1hefmgs.jpg" alt="" /> */}
        </div>

        <section className="text-gray-600 body-font my-[-50px]">
          <div className="container px-5 py-24 m-auto max-w-[1100px]">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className='bg-slate-200 rounded-2xl'>
                  <div className="px-4 py-6 rounded-lg">
                    <TbShoppingCartCode className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900">55+</h2>
                    <p className="leading-relaxed">
                      Products</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className='bg-slate-200 rounded-2xl'>
                  <div className="px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">595+</h2>
                    <p className="leading-relaxed">Clients</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className='bg-slate-200 rounded-2xl'>
                  <div className="px-4 py-6 rounded-lg">
                    <HiOutlineUserGroup className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900">7+</h2>
                    <p className="leading-relaxed">Team</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className='bg-slate-200 rounded-2xl'>
                  <div className="px-4 py-6 rounded-lg">
                    <MdOutlineDesignServices className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900">4+</h2>
                    <p className="leading-relaxed">Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='delivery'>
          <div className='returns'>
            <h1>Delivery &  Returns</h1>
            <p>To deliver your favorite products, we have become partners with the most reliable companies. We are ready to entrust them with your orders and are always on your side if something goes wrong.
              <br /><br />
              We will be happy to assist you for eligible returns, with a return instructions and the return shipping address. If you need a return or exchange, send us an email so we can discuss a replacement.</p>
          </div>
        </div>

        {/* Footer */}

        <Footer />

      </div>
    </div>
  )
}

export default Header