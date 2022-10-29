import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { ethers } from 'ethers';

function Player({ account, provider, isConnected }) {

    const [startGame, setStartGame] = useState(false);
    const [balance, setBalance] = useState(0);
    const [ante, setAnte] = useState(0.00025);
    const navigate = useNavigate();

    // need to set if isConnected === false, redirect to home
    useEffect(() => {
        if (!account) {
            return navigate('/');
        }

        if (startGame) {
            return navigate('/game', { replace: true, state: { dog: 'woof' } })
        }

        provider.getBalance(account).then((rawBalance) => {
            const bal = parseFloat(ethers.utils.formatEther(rawBalance));
            setBalance(bal);
        })

        // need to get ante from contract and set it
        // default ante value is 0.00025

    });

    const ready = async () => {
        console.log("isConnected", isConnected)
        console.log("startGame1", startGame)
        console.log("balance", balance)
        // double check isConnected?
        // check player can pay ante
        // if ante then setStartGame === true and navigate to game page 
        if (balance < ante) {
            console.log("Not enough ETH to play.")
            return
        }

        setStartGame(true);
    }

    return (
        <div>
            <p>{`Player is connected: ${isConnected}`}</p>
            <h1>
                Player Page
            </h1>
            <p className="caption">Your balance is</p>
            <h1 className="balance">{balance} ETH</h1>
            <Button variant="primary" onClick={ready}>Pay and Play</Button>{' '}
        </div>
    )
}


export default Player;