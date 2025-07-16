import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";
import { PiShootingStarLight, PiStorefrontLight, PiYoutubeLogo } from "react-icons/pi";
import { images } from "../assets/assets";

const Footer = () => {
    return (
        <>
            <div className="bg-black text-white">
                {/* Details info */}
                <div className="md:grid md:grid-cols-[repeat(3,_1fr)] lg:grid-cols-20 hidden px-15 pt-16 gap-5">
                    {/* ABOUT */}
                    <div className="flex flex-col leading-relaxed text-xs lg:col-span-2">
                        <h2 className="mb-3 text-gray-400">ABOUT</h2>
                        <a href="#">Contact Us</a>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Flipkart Stories</a>
                        <a href="#">Press</a>
                        <a href="#">Corporate Information</a>
                    </div>
                    {/* GROUP COMPANIES */}
                    <div className="leading-relaxed flex flex-col text-xs lg:col-span-3">
                        <h2 className="mb-3 text-gray-400">GROUP COMPANIES</h2>
                        <a href="#">Myntra</a>
                        <a href="#">Cleartrip</a>
                        <a href="#">Shopsy</a>
                    </div>
                    {/* HELP */}
                    <div className="leading-relaxed flex flex-col text-xs lg:col-span-2">
                        <h2 className="mb-3 text-gray-400">HELP</h2>
                        <a href="#">Payments</a>
                        <a href="#">Shipping</a>
                        <a href="#">Cancellation & Returns</a>
                        <a href="#">FAQ</a>
                    </div>
                    {/* CONSUMER POLICY */}
                    <div className="leading-relaxed flex flex-col text-xs lg:col-span-3 mr-2.5">
                        <h2 className="mb-3 text-gray-400">CONSUMER POLICY</h2>
                        <a href="#">Cancellation & Returns</a>
                        <a href="#">Terms Of Use</a>
                        <a href="#">Security</a>
                        <a href="#">Privacy</a>
                        <a href="#">Sitemap</a>
                        <a href="#">Grievance Redressal</a>
                        <a href="#">EPR Compliance</a>
                    </div>
                    {/* Mail Us: */}
                    <div className="leading-relaxed flex text-xs lg:col-span-5">
                        <div className="border-0 lg:border-l lg:border-l-[#454d5e] ml-0 pl-0 lg:ml-3 lg:pl-9">
                            <div>
                                <h2 className="mb-3 text-gray-400">Mail Us:</h2>
                                <p>Flipkart Internet Private Limited, </p>
                                <p> Buildings Alyssa, Begonia & </p>
                                <p> Clove Embassy Tech Village, </p>
                                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p> Bengaluru, 560103, </p>
                                <p> Karnataka, India</p>
                            </div>
                            <div>
                                <h2 className="mb-3 mt-3.5 text-gray-400">Social:</h2>
                                <div className="flex gap-2">
                                    <p><a href="#"><CiFacebook size={20} /></a></p>
                                    <p><a href="#"><FaXTwitter size={20} /></a></p>
                                    <p><a href="#"><PiYoutubeLogo size={20} /></a></p>
                                    <p><a href="#"><FaInstagram size={20} /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Registered Office Address */}
                    <div className="leading-relaxed flex flex-col text-xs lg:col-span-5">
                        <h2 className="mb-3 text-gray-400">Registered Office Address:</h2>
                        <div>
                            <p>Flipkart Internet Private Limited, </p>
                            <p> Buildings Alyssa, Begonia & </p>
                            <p> Clove Embassy Tech Village, </p>
                            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                            <p> Bengaluru, 560103, </p>
                            <p> Karnataka, India </p>
                            <p> CIN : U51109KA2012PTC066107 </p>
                            <div className="flex gap-1">
                                <p> Telephone: </p>
                                <p><a href="#">044-45614700</a> / <a href="#">044-67415800</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Ads + Cards */}
                <div className="w-full py-6 mt-10 flex justify-evenly text-[8px] md:text-[10px] lg:text-sm items-center bg-black border-t border-t-[#454d5e] ">
                    <p className="flex justify-center items-center gap-2"><PiStorefrontLight className="text-amber-500" /><span>Become a Seller</span></p>
                    <p className="flex justify-center items-center gap-2"><PiShootingStarLight className="text-amber-500" /><span>Advertise</span></p>
                    <p className="flex justify-center items-center gap-2"><IoGiftOutline className="text-amber-500" /><span>Gift Cards</span></p>
                    <p className="flex justify-center items-center gap-2"><GoQuestion className="text-amber-500" /> <span>Help Center</span></p>
                    <p className="flex justify-center items-center gap-2"><MdOutlineCopyright className="text-amber-500" /> 2017-2025 Flipkart.com</p>
                    <img src={images.payment_cards} alt="" className="md:w-xs w-3xs" />
                </div>
            </div>
        </>
    )
};

export default Footer;
