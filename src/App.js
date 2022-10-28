import Container from "react-bootstrap/Container";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Player from "./components/Player";
import Game from "./components/Game";

import { useState } from "react";

import { ethers } from 'ethers';


export default function App() {
  const getAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
      setAccount(accounts[0]);
      setIsConnected(true);
      setProvider(web3Provider);

    } else {
      console.log("Wallet not found.");
    }
  };

  const [account, setAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState("");

  return (
    <BrowserRouter>
      <Container>
        <Header account={account} />
        <Routes>
          <Route path="/" element={<Home account={account} getAccount={getAccount} isConnected={isConnected} />} />
          <Route path="/player" element={<Player account={account} provider={provider} isConnected={isConnected} />} />
          <Route path="/game" element={<Game account={account} provider={provider} />} />
          <Route />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
