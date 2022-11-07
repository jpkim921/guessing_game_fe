import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { ethers } from 'ethers';

const numbersArtifact = require('../abi/numbers.json');

const weiPerEther = ethers.constants.WeiPerEther;



function Player({ account, provider, isConnected, signer, setSigner, gameContract, setGameContract }) {

    const [startGame, setStartGame] = useState(false);
    const [balance, setBalance] = useState(0);
    const [ante, setAnte] = useState(0.00025);
    const navigate = useNavigate();
    // const provider = ethers.provider;

    // need to set if isConnected === false, redirect to home
    useEffect(() => {
        if (!account) {
            return navigate('/');
        }

        if (!gameContract) {
            const connectedGameContract = new ethers.Contract(numbersArtifact.address, numbersArtifact.abi, provider);
            
            connectedGameContract.functions.ante().then(res => {
                const [anteFromContract] = res;
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
            const bal = parseFloat(ethers.utils.formatEther(rawBalance));
            setBalance(bal);
        })

        // need to get ante from contract and set it
        // default ante value is 0.00025

    }, [account, startGame, provider, navigate, setSigner, gameContract, setGameContract]);


    const playerReadyPayAnte = async () => {
        const tx = await gameContract.connect(signer).functions.playerReadyPayAnte({value: ethers.utils.parseEther('0.00025')});
        const receipt = await tx.wait();
        // const blockNumber = receipt.blockNumber
        
        console.log("readypayAnte")
        console.log(receipt);


        await gameContract.on("PlayerReady(address, bool)", (player, paidAnte) => {
            console.log("inside ON")
            console.log('player', player);
            console.log('paidAnte', paidAnte);
            setStartGame(paidAnte);
        })
        console.log("-----------")

        // const evnt = gameContract.filters.PlayerReady(account, true)

        // const readyEvent = gameContract.filters.PlayerReady(account, true)
        // const blockNumber = 3;
        // const readyEvent = await gameContract.queryFilter("PlayerReady(address, bool)", 1, 2);
        // console.log(readyEvent);
    }


    const ready = async () => {
        // console.log("isConnected", isConnected)
        // console.log("startGame1", startGame)
        // console.log("balance", balance)
        // console.log('ante', ante)        
        // console.log('ante', ante / weiPerEther);
        // console.log("signer", await signer.getAddress())
        // double check isConnected?
        // check player can pay ante
        // if ante then setStartGame === true and navigate to game page 
        if (balance < ante / weiPerEther) {
            // console.log(balance< ante)
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
            {/* <h2 className="ante">{ante if } ETH</h2> */}
            <Button variant="primary" onClick={ready}>Pay and Play</Button>{' '}
        </div>
    )
}


export default Player;