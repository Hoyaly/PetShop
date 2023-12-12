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
import products from "./data";

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
                {/* <p><ProductList products={products}/></p> */}
                <Product products={products}></Product>
            </Row>
        </>

    )
}
export default Cards;
