// ProductList.js
import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const [cart, setCart] = useState({});

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = (updatedCart[productId] || 0) + 1;
      return updatedCart;
    });
  };

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
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <div>
         <label htmlFor="search">Tìm kiếm: </label>
         <input
           type="text"
           id="search"
           value={searchTerm}
           onChange={handleSearch}
         />
       </div>
        {/* <h2>Danh sách sản phẩm</h2> */}
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
          <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
          <p>{product.name}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => addToCart(product.id)}>+</button>
          <button onClick={() => reduceToCart(product.id)}>-</button>
          <p>Số lượng: {cart[product.id] || 0}</p>
        </div>
      ))}

      {/* {products.map((product) => (
        
      ))} */}
      <p>Tổng số lượng: {getTotalItems()}</p>
      <p>Tổng giá: {getTotalPrice()} VNĐ</p>
    </div>
  );
};

export default ProductList;

//------------------------------------------------//
// ProductList.js

// import React, { useState } from 'react';
// import Product from './Product';

// const ProductList = ({ products }) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState(products);

  // const handleSearch = (event) => {
  //   const term = event.target.value;
  //   setSearchTerm(term);
  //   const filtered = products.filter(product =>
  //     product.name.toLowerCase().includes(term.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // };

//   return (
//     <div>
//       <div>
//         <label htmlFor="search">Tìm kiếm: </label>
//         <input
//           type="text"
//           id="search"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
      // <h2>Danh sách sản phẩm</h2>
      // {filteredProducts.map(product => (
      //   <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl}/>
      // ))}
//     </div>
//   );
// };

// export default ProductList;

//=----------------------------------------------//


