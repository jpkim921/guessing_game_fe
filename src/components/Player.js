import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

function Player({ isConnected }) {
    
    useEffect(() => {
        if (!isConnected) {
            return navigate('/');
        }
    });

    // need to set if isConnected === false, redirec to home

    const [startGame, setStartGame] = useState(false);
    const navigate = useNavigate();

    const ready = () => {
        console.log("isConnected", isConnected)
        console.log("startGame1", startGame)


        // double check isConnected?
        // check player can pay ante
        // if ante then setStartGame === true and navigate to game page 
        
        setStartGame(true);
    }

    useEffect(() => {
        if (startGame) {
            return navigate('/game', {replace: true, state: {dog: 'woof'}})
        }
    });

    return (
        <div>
            <h1>
                <p>{`Player is connected: ${isConnected}`}</p>
                Player Page
            </h1>
            <Button variant="primary" onClick={ready}>Pay and Play</Button>{' '}
        </div>
    )
}


export default Player;