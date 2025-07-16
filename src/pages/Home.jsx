import React, { useEffect, useState } from "react";
import Menu from "../components/MenuCard";
import Carousel from '../components/Carousel'
import { banners, fetchAssets, fetchFake } from "../assets/assets";
import ProductsCard from "../components/ProductsCard";
import products_01 from '../assets/mensFashions.json'
import products_02 from '../assets/Electronics.json'
import products_03 from '../assets/womenFashion.json'

const Home = () => {
    const slides = banners;

    return <div className="mx-3.5 mt-2">
        <Menu />
        <Carousel slides={slides} />
        <ProductsCard products={products_01.products} category={"Fashion & Mens"} />
        <ProductsCard products={products_02.products} category={"Electronics"} />
        <ProductsCard products={products_03.products} category={"Fashion & Womens"} />
    </div>;
};

export default Home;
