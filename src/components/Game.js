import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NumberCard from './NumberCard';

import CardTable from "./CardTable";


function Game({ account, provider }) {
    // console.log("account", account);
    // console.log("provider", provider);

    const [round, setRound] = useState(1);
    const [choice, setChoice] = useState(0);

    let numbers = [];

    for (let i = 1; i <= 2 ** round; i++) {
        if (i < 10) {
            numbers.push("0" + i.toString());
        } else {
            numbers.push(i.toString());
        }
    }


    return (
        <div>
            <h2>Round {round}</h2>
            <Container>
                <Row>
                    {numbers.map((number, idx) => (
                        <Col xs key={idx} ><NumberCard number={number} setChoice={setChoice} /></Col>
                    ))}
                </Row>
            </Container>
            <h1>Your choice: {choice}</h1>
        </div>
    )
}


export default Game;