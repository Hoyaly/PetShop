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
    // const [filteredProducts, setFilteredProducts] = useState(products);
    // const [cart, setCart] = useState({});

    // const addToCart = (productId) => {
    //     setCart((prevCart) => {
    //         const updatedCart = { ...prevCart };
    //         updatedCart[productId] = (updatedCart[productId] || 0) + 1;
    //         return updatedCart;
    //     });
    // };

    // const reduceToCart = (productId) => {
    //     setCart((prevCart) => {
    //         const reduceToCart = { ...prevCart };
    //         reduceToCart[productId] = (reduceToCart[productId] || 0) - 1;
    //         return reduceToCart;
    //     });
    // };

    // const getTotalItems = () => {
    //     return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
    // };

    // const getTotalPrice = () => {
    //     let totalPrice = 0;
    //     Object.entries(cart).forEach(([productId, quantity]) => {
    //         const product = products.find((p) => p.id === parseInt(productId));
    //         if (product) {
    //             totalPrice += quantity * parseFloat(product.price.replace(' VNĐ', '').replace(',', ''));
    //         }
    //     });
    //     return totalPrice.toFixed(2);
    // };
    return (
        <>
            <Header />
            <Find />
            <Tabss />
            <h1 className="danhsach">Giỏ hàng</h1>
            <h1 className="danhsach">-----<MdOutlinePets />-----</h1>
            {/* <p><ProductList products={products} /></p> */}
            {/* {filteredProducts.map(products => ( */}
            {/* <div key={products.id} className="product">
                    <img src={products.imageUrl} alt={products.name} style={{ width: '100px', height: '100px' }} />
                    <p>{products.name}</p>
                    <p>Price: {products.price}</p>
                    <button onClick={() => addToCart(products.id)}>+</button>
                    <button onClick={() => reduceToCart(products.id)}>-</button>
                    <p>Số lượng: {cart[products.id] || 0}</p>
                </div> */}
            {/* ))} */}
            {/* <p>Tổng số lượng: {getTotalItems()}</p>
            <p>Tổng giá: {getTotalPrice()} VNĐ</p> */}
            
        </>
    )
}
export default Cart