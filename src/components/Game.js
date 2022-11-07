import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NumberCard from './NumberCard';

import CardTable from "./CardTable";


function Game({ account, provider, signer, gameContract }) {
    // console.log("signer", signer);
    // console.log("account", account);
    // console.log("provider", provider);

    const [round, setRound] = useState(1);
    const [choice, setChoice] = useState(0);
    const [numbers, setNumbers] = useState([])

    // let numbers = [];

    useEffect(() => {
        const choices = []
        for (let i = 1; i <= 2 ** round; i++) {
            if (i < 10) {
                choices.push("0" + i.toString());
            } else {
                choices.push(i.toString());
            }
        }
        console.log(choices);
        setNumbers(choices)
        // console.log("n", numbers);
    }, [round, setNumbers])


    return (
        <div>
            <h2>Round {round}</h2>
            <Container>
                <Row>
                    {numbers.map((number, idx) => (
                        <Col xs key={idx} ><NumberCard number={number} setChoice={setChoice} round={round} setRound={setRound} provider={provider} signer={signer} gameContract={gameContract}/></Col>
                    ))}
                </Row>
            </Container>
            <h1>Your choice: {choice}</h1>
        </div>
    )
}


export default Game;