import { Button, Card, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import Header from "./Header";
import Find from "./Find";
import Tabss from "./Tabss";
import ProductList from "./ProductList";

const products = [
    { id: 1, name: 'Chó Alaska', price: '7.000.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg' },
    { id: 2, name: 'Chó Corgi', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi.jpg' },
    { id: 3, name: 'Chó Husky', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg' },
    { id: 4, name: 'Chó Phốc Sóc', price: '8.500.000 VNĐ', imageUrl: 'https://azpet.com.vn/wp-content/uploads/2021/06/Phoc-Soc.jpg' },
  ];
const Cards = () => {
    return (
        <>
            <Header />
            <Find/>
            <Tabss/>
            <h1>Danh sách sản phẩm</h1>
            <Row className="justify-content-around">
            <ProductList products={products} />
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg" />
                    <Card.Body>
                        <Card.Title>Chó Alaska</Card.Title>
                        <Card.Text>
                            7.000.000 VNĐ
                        </Card.Text>
                        <Button variant="primary">Mua</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://azpet.com.vn/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi.jpg" />
                    <Card.Body>
                        <Card.Title>Chó Corgi</Card.Title>
                        <Card.Text>
                            8.500.000 VNĐ
                        </Card.Text>
                        <Button variant="primary">Mua</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg" />
                    <Card.Body>
                        <Card.Title>Chó Corgi</Card.Title>
                        <Card.Text>
                            8.500.000 VNĐ
                        </Card.Text>
                        <Button variant="primary">Mua</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://azpet.com.vn/wp-content/uploads/2021/06/Phoc-Soc.jpg" />
                    <Card.Body>
                        <Card.Title>Chó Corgi</Card.Title>
                        <Card.Text>
                           8.500.000 VNĐ
                        </Card.Text>
                        <Button variant="primary">Mua</Button>
                    </Card.Body>
                </Card> */}
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg" />
                    <Card.Body>
                        <Card.Title>Chó Alaska</Card.Title>
                        <Card.Text>
                            7.000.000 VNĐ
                        </Card.Text>
                        <Button variant="primary">Mua</Button>
                    </Card.Body>
                </Card> */}
            </Row>
        </>

    )
}
export default Cards;