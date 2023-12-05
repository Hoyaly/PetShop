import Find from "./Find"
import Header from "./Header"
import Tabss from "./Tabss"
import { MdOutlinePets } from "react-icons/md";
import '../css/Cards.css'
import React, { useState } from 'react';


const Cart = () => {
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