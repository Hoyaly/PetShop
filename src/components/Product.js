
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';
import '../css/product.css';
import { useState } from 'react';
import Cart from './Cart';
import { MdOutlinePets } from "react-icons/md";

const Product = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const addToCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            updatedCart[productId] = (updatedCart[productId] || 0) + 1;
            return updatedCart;
        });
    };
    const [cart, setCart] = useState({});
    const reduceToCart = (productId) => {
        setCart((prevCart) => {
            const reduceToCart = { ...prevCart };
            reduceToCart[productId] = (reduceToCart[productId] || 0) - 1;
            return reduceToCart;
        });
    };
    const getTotalItems = () => {
        return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        Object.entries(cart).forEach(([productId, quantity]) => {
            const product = products.find((p) => p.id === parseInt(productId));
            if (product) {
                totalPrice += quantity * parseFloat(product.price.replace(' VNĐ', '').replace(',', ''));
            }
        });
        return totalPrice.toFixed(6);
    };
    return (
        <div className='product-list'>

            {products.map((product, i) => (
                <Card key={i} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                        {/* <a href={`/detail/${product.id}`}>Chi tiết</a> */}
                        <button className='btn-cart' onClick={() => addToCart(product.id)}>Mua</button>
                        <button className='btn-cart' onClick={() => reduceToCart(product.id)}>Giảm</button>
                    </Card.Body>
                </Card>

            ))}
            <h1 className="danhsach">Giỏ hàng</h1>
            <h1 className="danhsach">-----<MdOutlinePets />-----</h1>
            <div>Tổng số lượng: {getTotalItems()}</div>
            <div>Tổng giá: {getTotalPrice()} VNĐ</div>
        </div>

    );
};

export default Product;



