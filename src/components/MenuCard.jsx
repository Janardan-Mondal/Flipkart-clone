import React from "react";
import { menuList } from "../assets/assets";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {

    return <div className="bg-white max-w-full h-35 flex justify-evenly items-center gap-1 overflow-x-auto scroll-smooth scrollbar">
        {menuList.map((item, index) => {
            return (
                <div key={index} className="h-full w-fit p-5 text-center flex flex-col justify-center items-center gap-1.5 font-semibold text-sm group cursor-pointer">
                    <img src={item.menu_image} alt="" />
                    <div className="flex justify-center items-center gap-1">
                        <h2 className={`whitespace-pre-line ${item.showArrow ? "group-hover:text-blue-600" : ""}`}>{item.menu_name}</h2>
                        {item.showArrow && <MdKeyboardArrowDown size={20} className="group-hover:-rotate-180 group-hover:text-blue-600  transition-all duration-300" />}
                    </div>
                </div>
            )
        })}
    </div>;
};

export default Menu;
