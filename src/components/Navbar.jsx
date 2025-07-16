import React from "react";
import { images } from "../assets/assets";
import { CiCreditCard1, CiHeart, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { PiDownloadSimpleLight, PiShoppingCartLight, PiStorefrontLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { LuHeadset } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";

const Navbar = () => {
    return <div className="w-full bg-white sticky top-0 text-lg px-5 py-3.5 flex flex-wrap gap-4 justify-between
    z-50">
        <div className="flex w-[57%] gap-9">
            <img src={images.Logo} className="w-45 ml-2 " alt="Flipkart Logo" />
            <div className="hidden md:flex items-center gap-1 w-full bg-search-bg rounded-lg cursor-pointer">
                <CiSearch size={26} className="ml-3" />
                <input className="w-full p-1.5 outline-none placeholder-placeholder" type="text" placeholder="Search for Products, Brands and More" />
            </div>
        </div>
        <div className="flex-1 flex items-center md:justify-between gap-1.5">
            <div className="group relative flex items-center gap-1.5 hover:bg-blue-600 p-1.5 transition rounded-lg cursor-pointer">
                <CgProfile size={23} className="group-hover:text-white" />
                <span className="group-hover:text-white">Login</span>
                <MdKeyboardArrowDown size={18} className="group-hover:rotate-180 group-hover:text-white transform transition-transform duration-500" />
                {/* Dropdown Menu */}
                <div className="hidden sm:block absolute top-9 sm:-left-20 md:-left-10 lg:left-0 sm:right-auto lg:right-0 mt-1 w-70 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                    <div className="flex justify-between items-center px-4 py-2 cursor-pointer text-gray-700 border-b border-b-gray-400">
                        <p>New customer?</p>
                        <button className="text-blue-600">Sign Up</button>
                    </div>
                    <ul className="text-sm text-gray-700 py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#" className="flex items-center gap-2"><CgProfile size={20} /><span>My Profile</span></a></li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#" className="flex items-center gap-2"><img className="w-5" src={images.plusZone} alt="" /><span>Flipkart Plus Zone</span></a></li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#" className="flex items-center gap-2.5 ml-1"><FaBox /><span>Orders</span></a></li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#" className="flex items-center gap-2"><CiHeart size={20} /><span>Wishlist</span></a></li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#" className="flex items-center gap-2"><IoGiftOutline size={20} /><span>Rewards</span></a></li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#" className="flex items-center gap-2"><CiCreditCard1 size={20} /><span>Gift Cards</span></a></li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center gap-1.5 cursor-pointer">
                <PiShoppingCartLight size={23} />
                <span className="hidden min-1190:inline">Cart</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 cursor-pointer">
                <PiStorefrontLight size={23} />
                <span className="hidden min-1190:inline">Become a Seller</span>
            </div>
            <div className="mr-8 hidden md:block group relative">
                <button className="p-2 hover:outline rounded-lg hover:bg-gray-100 outline-gray-300 hover:outline-gray-300 transition cursor-pointer">
                    <img src={images.threedots} alt="More Options" />
                </button>
                <div className="invisible bg-white group-hover:visible absolute top-10 z-10 right-0 w-60 shadow-lg rounded-md transition-all duration-200">
                    <ul className="text-sm text-gray-700 py-2">
                        <li className="px-4 py-2 cursor-pointer"><a href="#" className="flex items-center gap-2"><BiBell size={20} /><span>Notification Preferences</span></a></li>
                        <li className="px-4 py-2 cursor-pointer"><a href="#" className="flex items-center gap-2"><LuHeadset size={20} /><span>24x7 Customer Care</span></a></li>
                        <li className="px-4 py-2 cursor-pointer"><a href="#" className="flex items-center gap-2.5 ml-1"><FaArrowTrendUp size={18} /><span>Advertise</span></a></li>
                        <li className="px-4 py-2 cursor-pointer"><a href="#" className="flex items-center gap-2"><PiDownloadSimpleLight size={20} /><span>Download App</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
};

export default Navbar;
