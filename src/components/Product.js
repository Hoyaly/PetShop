
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';
import '../css/product.css'

const Product = ({ products }) => {
    return (
            <div className='product-list'>
                {products.map((product) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.imageUrl} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.price}
                            </Card.Text>
                            <button variant="primary">Mua</button>
                        </Card.Body>
                    </Card>

                ))}
            </div>

    );
};

export default Product;



