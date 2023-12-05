import { Button, Card, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import Header from "./Header";
import Find from "./Find";
import Tabss from "./Tabss";
import ProductList from "./ProductList";
import Product from "./Product";
import '../css/Cards.css'
import { MdOutlinePets } from "react-icons/md";
import Cart from "./Cart";
const products = [
    { id: 1, name: 'Chó Alaska', price: '7.000.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { id: 2, name: 'Chó Corgi', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi.jpg' },
    { id: 3, name: 'Chó Husky', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg' },
    { id: 4, name: 'Chó Phốc Sóc', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Phoc-Soc.jpg' },
    { id: 5, name: 'Mèo Anh Lông Dài', price: '7.000.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Meo-Anh-Long-Dai.jpg' },
    { id: 6, name: 'Mèo Anh Lông Ngắn', price: '7.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Meo-Anh-Long-Ngan.jpg' },
    { id: 7, name: 'Mèo Ba Tư', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Meo-ba-tu.jpg' },
    { id: 8, name: 'Mèo Munchkin', price: '15.000.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/meo-munchkin.jpg' },
    { id: 9, name: 'Ganador Chó Lớn Vị Cừu 3kg', price: '200.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/230923b332d9469aa86207de63a34c80.jpeg' },
    { id: 10, name: 'Royal Canin - Medium Puppy', price: '200.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/115cad895e2f4835a3967ccff27c7751.jpeg' },
    { id: 11, name: 'Hạt Giống Cỏ Mèo', price: '20.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/b12ccdd06e5f4a438162c66d3d743e46.jpeg' },
    { id: 12, name: 'Pate Wanpy Nắp Vặn 90g', price: '25.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/23646db77c354e688cec9e191f619dcd.jpeg' },
];

const Cards = () => {
    return (
        <>
            <Header />
            <Find />
            <Tabss />
            <h1 className="danhsach">Danh sách sản phẩm</h1>
            <h1 className="danhsach">-----<MdOutlinePets />-----</h1>
            <Row className="justify-content-around">
                {/* <Product></Product> */}
                <p><ProductList products={products}/></p>
                {/* <Product products={products}></Product> */}
            </Row>
        </>

    )
}
export default Cards;

// import Header from "./Header";
// import ProductList from "./ProductList"
// import Tabss from "./Tabss";
// // import ProductList from "./ProductList"
// const products = [
//     { id: 1, name: 'Chó Alaska', price: '7.000.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
//     { id: 2, name: 'Chó Corgi', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi.jpg' },
//     { id: 3, name: 'Chó Husky', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg' },
//     { id: 4, name: 'Chó Phốc Sóc', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Phoc-Soc.jpg' },
//     { id: 5, name: 'Mèo Anh Lông Dài', price: '7.000.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Meo-Anh-Long-Dai.jpg' },
//     { id: 6, name: 'Mèo Anh Lông Ngắn', price: '7.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Meo-Anh-Long-Ngan.jpg' },
//     { id: 7, name: 'Mèo Ba Tư', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Meo-ba-tu.jpg' },
//     { id: 8, name: 'Mèo Munchkin', price: '15.000.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/meo-munchkin.jpg' },
//     { id: 9, name: 'Ganador Chó Lớn Vị Cừu 3kg', price: '200.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/230923b332d9469aa86207de63a34c80.jpeg' },
//     { id: 10, name: 'Royal Canin - Medium Puppy', price: '200.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/115cad895e2f4835a3967ccff27c7751.jpeg' },
//     { id: 11, name: 'Hạt Giống Cỏ Mèo', price: '20.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/b12ccdd06e5f4a438162c66d3d743e46.jpeg' },
//     { id: 12, name: 'Pate Wanpy Nắp Vặn 90g', price: '25.000 VNĐ', imageUrl: 'https://cdn-images.kiotviet.vn/petshopdanang/23646db77c354e688cec9e191f619dcd.jpeg' },
// ];
// const Cards = () => {
//     return (
//         <>
//             <Header />
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuOhX_kvwl5ao-TL3dZ_-uRmqIxXS8ukh4x4FvJ39ZZj4HRJufkQDQIVf86J-PwiXZ88&usqp=CAU" style={{ width: '100px', height: '100px' }}></img>
//             <h1>Pet Shop</h1>
//             <Tabss />
//             <p><ProductList products={products} /></p>
//         </>

//     )
// }
// export default Cards