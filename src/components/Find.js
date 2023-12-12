import Form from 'react-bootstrap/Form';
import { IoPersonSharp } from "react-icons/io5";
import '../css/Find.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import LoginForm from './Login';
import { event } from 'jquery';
import products from './data';
import Login from './Login';


const Find = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchItem, setSearchItem] = useState([]);
    const handleSearch = (event) => {
        const term = event.target.value;
        // console.log(term);
        // setSearchTerm(term);
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
        console.log(filtered);
        setSearchItem(filtered);
        if(!term.trim()){
            setSearchItem([]);
        }

    }
    return (
        <div className='control'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuOhX_kvwl5ao-TL3dZ_-uRmqIxXS8ukh4x4FvJ39ZZj4HRJufkQDQIVf86J-PwiXZ88&usqp=CAU" style={{ width: '100px', height: '100px' }}></img>
            <div className="huhu">
                {/* <Form.Control
                    placeholder="Nhập tìm kiếm của bạn"
                    aria-label="Nhập tìm kiếm của bạn"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary">Tìm</Button> */}

                <div style={{position: 'relative'}}>
                    <div>
                        <label htmlFor="search">Tìm kiếm: </label>
                        <input
                            type="text"
                            id="search"
                            // value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div style={{position: 'absolute', zIndex: '5'}}>
                        {searchItem.map(product => (
                            <div key={product.id} className='product'>
                                <a href={`/detail/${product.id}`}>{product.name}</a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* <div className='dangnhap'>
                <Button variant="outline-dark">
                    <IoPersonSharp />
                    <a href="./Login">Đăng nhập</a>
                </Button>
            </div> */}
            {/* <LoginForm/> */}
        </div>
    )
}
export default Find;