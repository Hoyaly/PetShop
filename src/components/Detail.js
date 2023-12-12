import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from './data';
import Find from "./Find";
import Header from "./Header";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabss from "./Tabss";
import { Button } from "react-bootstrap";


const Detail = () => {
    const id = useParams().id
    const [detail, setDetail] = useState({})

    useEffect(() => {
        products.forEach((e) => {
            if (e.id == id) {
                setDetail(e)
            }
        });
    }, []);
    // console.log(id);
    return (
        // <h1>{id}</h1>
        <>
            <Header />
            {/* <Find/> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuOhX_kvwl5ao-TL3dZ_-uRmqIxXS8ukh4x4FvJ39ZZj4HRJufkQDQIVf86J-PwiXZ88&usqp=CAU" style={{ width: '100px', height: '100px' }}></img>
            <Tabss/>
            <div>
                {/* <span>{detail.name}</span>
                <span>{detail.price}</span>
                <img src={detail.imageUrl} /> */}
                <Card style={{ width: '70%' }}>
                    <Card.Img variant="top" src={detail.imageUrl} />
                    <Card.Body>
                        <Card.Title>{detail.name}</Card.Title>
                        <Card.Text>
                        {detail.price}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Tên : David</ListGroup.Item>
                        <ListGroup.Item>Tuổi: 3 năm</ListGroup.Item>
                        <ListGroup.Item>Giới tính: Nam</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button href="/danhsach">Mua</Button>
                    </Card.Body>
                </Card>
            </div>
        </>

    )
}
export default Detail;