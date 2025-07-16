import Logo from '../assets/Logo.svg'
import threedots from '../assets/threeDots.svg'
import plusZone from '../assets/plus_zone.svg'
import menu_1 from '../assets/menu_01.webp'
import menu_2 from '../assets/menu_02.webp'
import menu_3 from '../assets/menu_03.webp'
import menu_4 from '../assets/menu_04.webp'
import menu_5 from '../assets/menu_05.webp'
import menu_6 from '../assets/menu_06.webp'
import menu_7 from '../assets/menu_07.webp'
import menu_8 from '../assets/menu_08.webp'
import menu_9 from '../assets/menu_09.webp'

import banner_01 from '../assets/banner_01.webp'
import banner_02 from '../assets/banner_02.webp'
import banner_03 from '../assets/banner_03.webp'
import banner_04 from '../assets/banner_04.webp'
import banner_05 from '../assets/banner_05.webp'
import banner_06 from '../assets/banner_06.webp'

import payment_cards from '../assets/payment-method.svg'

export const images = {
    Logo, threedots, plusZone, menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7, menu_8, menu_9, banner_01, banner_02, banner_03, banner_04, banner_05, banner_06, payment_cards
}

export const banners = [banner_01, banner_02, banner_03, banner_04, banner_05, banner_06]
export const menuList = [
    {
        menu_name: "Grocery",
        menu_image: menu_1
    },
    {
        menu_name: "Mobiles",
        menu_image: menu_2
    },
    {
        menu_name: "Fashion",
        menu_image: menu_3,
        showArrow: true
    },
    {
        menu_name: "Electronics",
        menu_image: menu_4,
        showArrow: true
    },
    {
        menu_name: "Home & \n Furniture",
        menu_image: menu_5,
        showArrow: true
    },
    {
        menu_name: "Appliances",
        menu_image: menu_6
    },
    {
        menu_name: "Flight Bookings",
        menu_image: menu_7
    },
    {
        menu_name: "Beauty, Toys & \n More",
        menu_image: menu_8,
        showArrow: true
    },
    {
        menu_name: "Two \n Wheelers",
        menu_image: menu_9,
        showArrow: true
    },
]



export const fetchAssets = async () => {
    try {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchFake = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}
// mixedAPI
// https://fakestoreapi.com/products