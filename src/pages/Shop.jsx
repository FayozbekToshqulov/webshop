import React, { useState, useEffect, Fragment } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { TbBasketPlus } from "react-icons/tb";
import Footer from './Footer';
import { notification } from 'antd';
import { LuSearchCode } from "react-icons/lu";
import HP from '../img/hp.png';
import MI from '../img/mi.png';
import Logo from '../img/logo1.png';

function Blog({ count, setCount }) {
    const [blog, setBlog] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = collection(db, 'user');
            const unsubscribe = onSnapshot(dataRef, (snapshot) => {
                let malumot = [];
                snapshot.forEach((doc) => {
                    malumot.push({ ...doc.data(), id: doc.id });
                });
                setBlog(malumot);
            });

            return () => unsubscribe();
        };

        fetchData();
    }, []);

    const handleCart = (dataCard) => {
        let data = localStorage.getItem("cards");

        if (data) {
            data = JSON.parse(data);
        } else {
            data = [];
        }
        const existingItem = data.find(item => item.id === dataCard.id);
        if (existingItem) {
            existingItem.piece += 1;
            existingItem.price += Number(dataCard.price);
        } else {
            data.push({
                name: dataCard.title,
                img: dataCard.img,
                price: Number(dataCard.price),
                piece: 1,
                id: dataCard.id,
            });
        }
        localStorage.setItem("cards", JSON.stringify(data));

        notification.success({
            message: "Savatga qo'shildi !",
            description: "Tanlagan mahsulotingiz savatga qo'shildi. Savatga o'tib buyurtma berishingiz mumkin !"
        });

        setCount(prevCount => prevCount + 1);
    };

    const filteredBlog = blog.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "" || item.category === category)
    );

    return (
        <div className='bg-white'>
            <div className='mt-[70px] border-black'>
                <marquee behavior="scroll" direction="left" scrollamount="10">
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

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Bizning mahsulotlarimiz</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Bizning so'nggi yangiliklarimiz va mahsulotlarimiz bilan tanishing.</p>
                        <div className="flex justify-center mt-8 max-sm:block">
                            <LuSearchCode className='max-sm:left-7 max-sm:top-7 relative top-3 left-7 text-blue-500' />
                            <input
                                type="search"
                                className="max-sm:w-[90%] max-sm:mb-3 w-[100%] border-[1.7px] border-blue-600 text-blue-500 bg-white h-10 px-10 pr-3 rounded-lg text-sm focus:outline-none"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <select
                                className="max-sm:w-[55%] max-sm:ml-2 ml-2 border-[1.7px] border-blue-600 text-blue-500 bg-white h-10 px-2 pr-1 rounded-lg text-sm focus:outline-none"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">All Products</option>
                                <option value="ACCESSORIES">Accessories</option>
                                <option value="WATCH">Watchs</option>
                                <option value="PHONE">Phones</option>
                                <option value="LAPTOP">Laptops</option>
                                <option value="SERVICE">Services</option>
                                <option value="PERFUME">Perfumes</option>
                                <option value="STICKER">Stickers</option>
                                <option value="FOR CHILDREN">For Children</option>
                                <option value="FOR PROGRAMMER">For Programmers</option>
                                <option value="ACCESSORIES FOR COMPUTER">Accessories for Computers</option>
                                <option value="ACCESSORIES FOR PHONE">Accessories for Phones</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="max-sm:m-0 flex flex-wrap -m-[-1%]">
                        {filteredBlog.map((item, index) => (
                            <Fragment key={index}>
                                <div className="h-[500px] m-auto mb-10 max-sm:mb-[-10%]">
                                    <div className="flex flex-wrap">
                                        <div className="lg:w-1/2 md:w-1/2 p-4 max-sm:w-[10%]">
                                            <a className="max-sm:w-[120px] max-sm:h-[180px] w-[271px] block relative h-[271px] rounded overflow-hidden">
                                                <img alt="gallery" className="p-0 absolute inset-0 w-full h-full object-cover object-center border-[1px] border-black rounded-xl" src={item.img} />
                                                <div className="h-[271px] w-[271px] px-8 py-5 relative z-10 border-[1px] border-black rounded-xl bg-white opacity-0 hover:opacity-100  active:opacity-100 max-sm:w-[120px] max-sm:h-[180px] max-sm:px-5">
                                                    <h1 className="mt-[10%] title-font text-lg font-medium text-blue-700 mb-3
                                                    max-sm:mb-10 max-sm:text-[13px] max-sm:mt-[5%]">Web Shop</h1>
                                                    <p className="mt-0 leading-relaxed max-sm:mt-[-40%] max-sm:text-[10px]">{item.matn}</p>
                                                </div>
                                                <img alt="ecommerce" className="object-cover object-center w-[550px] h-[300px] " src={item.img} />
                                            </a>
                                            <div className="max-sm:w-[100px] max-sm:p-0 p-3 mt-5 ml-3 w-[200px] h-[150px]">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 w-[200px] max-sm:text-[10px] max-sm:w-[130px]">{item.category}</h3>
                                                <h2 className="text-gray-900 title-font text-lg w-[200px] font-medium max-sm:text-[12px] max-sm:w-[130%]">{item.title}</h2><br />
                                                <div className='flex w-10'>
                                                    <del className='text-gray-500 w-[200px] mr-1 p-1'>{item.oldprice}</del>
                                                    <p className='text-white bg-blue-600 p-1 rounded'>{item.sale}%</p>
                                                </div>
                                                <div className='flex flex-wrap w-[271px]'>
                                                    <p className="max-sm:text-[20px] text-blue-500 text-[20px] mt-5 text w-[90px] font-bold">{item.price} $</p>
                                                    <TbBasketPlus onClick={() => handleCart(item)} className='cursor-pointer mt-[25px] text-blue-500 text-[25px] ml-[38%] max-sm:ml-[-4%] max-sm:text-[22px]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>

            <div className='mt-[2px] border-black'>
                <marquee behavior="scroll" direction="right" scrollamount="10">
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

            <Footer />
        </div>
    );
}

export default Blog;
