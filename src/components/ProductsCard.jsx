import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProductsCard = ({ products, category }) => {

    const containerRef = useRef(null);
    const buttonRef = useRef(null);
    const [isRight, setIsRight] = useState(false)

    const buttonClickHandle = (e) => {
        e.preventDefault()
        const container = containerRef.current;
        const button = buttonRef.current;

        console.log(isRight);
        if (!isRight) {
            container.scrollLeft = container.scrollWidth;
            setIsRight(true)
            console.log(isRight);
        } else {
            container.scrollLeft = 0;
            setIsRight(false)
        }

    }




    return (
        <>
            <div className="bg-white mt-5 relative ">
                <h1 className="m-3.5 text-2xl font-semibold ">Best of {category}</h1>

                {/* products showcase */}
                <div className="m-3.5 overflow-hidden scrollbar flex flex-nowrap gap-20" ref={containerRef}>
                    {products.map((item, index) => (
                        <div key={index} className="flex-shrink-0 flex flex-col gap-2 text-center justify-center items-center p-2">
                            <div>
                                <img src={item.image} className="w-40 transition-all duration-500 hover:scale-105" alt="" />
                            </div>
                            <div>
                                <p>{item.title.slice(0, 15)}...</p>
                                <h3 className="text-l font-medium">From ${item.price}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Button */}
                <button ref={buttonRef} onClick={buttonClickHandle} className={`absolute top-1/2 translate-y-[-50%] shadow-xl/20 ${isRight ? 'left-5 rounded-r' : 'right-5 rounded-l'} transition-all duration-500 bg-white  h-[88px] w-10 flex items-center justify-center cursor-pointer`}>{isRight ? (<MdKeyboardArrowLeft />) : (<MdKeyboardArrowRight />)}</button>
            </div>
        </>
    );
};

export default ProductsCard;

