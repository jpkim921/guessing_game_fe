
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';

import NumberCard from './NumberCard';



function CardTable({ round }) {

    let numbers = [];

    for (let i = 1; i <= 2 ** round; i++) {
        if (i < 10) {
            numbers.push("0" + i.toString());
        } else {
            numbers.push(i.toString());
        }
    }

    return (
        <Container>
            <Row>
                {numbers.map((number, idx) => (
                    <Col xs key={idx} ><NumberCard number={number} /></Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardTable;