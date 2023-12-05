// Product.js
import React from 'react';
import '../css/product.css'

const Product = ({ id, name, price, imageUrl }) => (
  <div className='product-list'>
    <div className='product'>
        <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px' }} />
        <p>{name}</p>
        <button>Giá: {price}</button>
        <button>Thêm vào giỏ hàng</button>
    </div>
  </div>
);

export default Product;

//----------------------------------------------//





