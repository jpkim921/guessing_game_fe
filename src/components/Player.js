import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { ethers } from 'ethers';

const houseArtifact = require('../abi/house.json');

const weiPerEther = ethers.constants.WeiPerEther;



function Player({ account, provider, isConnected, signer, setSigner, gameContract, setGameContract }) {

    const [startGame, setStartGame] = useState(false);
    const [balance, setBalance] = useState(0);
    const [ante, setAnte] = useState(250000000000000);
    const navigate = useNavigate();
    // const provider = ethers.provider;

    // need to set if isConnected === false, redirect to home
    useEffect(() => {
        if (!account) {
            return navigate('/');
        }

        if (!gameContract) {
            const connectedGameContract = new ethers.Contract(houseArtifact.address, houseArtifact.abi, provider);

            connectedGameContract.functions.ante().then(res => {
                let [anteFromContract] = res;
                setAnte(anteFromContract);
            });

            setGameContract(connectedGameContract);
        }

        

        if (startGame) {
            return navigate('/game')
        }

        const player_signer = provider.getSigner();
        setSigner(player_signer);

        provider.getBalance(account).then((rawBalance) => {
            
            const bal = parseFloat(ethers.utils.formatEther(rawBalance)).toString();
            // const bal = parseFloat(ethers.utils.formatEther(rawBalance));
            setBalance(bal);
        })

    }, [account, startGame, provider, navigate, setSigner, gameContract, setGameContract]);


    const playerReadyPayAnte = async () => {
        
        console.log("ante inside playerReadyPayAnte", ante.toString());

        const tx = await gameContract.connect(signer).functions.playerReadyPayAnte({ value: ante.toString() });
        const receipt = await tx.wait();

        await gameContract.once("PlayerReady(address, bool)", (player, playerReady) => {
            console.log("ante was paid. about to start game.")
            setStartGame(playerReady);
            console.log("after setStartGame")
        })

        // const evnt = gameContract.filters.PlayerReady(account, true)

        // const readyEvent = gameContract.filters.PlayerReady(account, true)
        // const blockNumber = 3;
        // const readyEvent = await gameContract.queryFilter("PlayerReady(address, bool)", 1, 2);
        // console.log(readyEvent);
    }


    const ready = async () => {
        // if ante then setStartGame === true and navigate to game page 
        if (balance < ante / weiPerEther) {
            console.log("Not enough ETH to play.")
            return
        }

        playerReadyPayAnte();
        // setStartGame(true);
    }

    return (
        <div>
            <p>{`Player is connected: ${isConnected}`}</p>
            <h1>
                Player Page
            </h1>
            <p className="caption">Your balance is</p>
            <h1 className="balance">{balance} ETH</h1>
            {/* <h1 className="Ante">{ethers.utils.formatEther(ante)} ETH</h1> */}
            <Button variant="primary" onClick={ready}>Pay and Play</Button>{' '}
        </div>
    )
}


export default Player;