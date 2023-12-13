import Find from "./Find"
import Header from "./Header"
import Tabss from "./Tabss"
import { MdOutlinePets } from "react-icons/md";
import '../css/Cards.css'
import React, { useState } from 'react';
import ProductList from "./ProductList";
import Product from "./Product";
import products from "./data";

const Cart = ({ cart, addToCart, reduceToCart }) => {
    return (
        <>
            <Header />
            <Find />
            <Tabss />
            <h1 className="danhsach">Giỏ hàng</h1>
            <h1 className="danhsach">-----<MdOutlinePets />-----</h1>
            
        </>
    )
}
export default Cart