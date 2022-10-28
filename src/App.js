import Container from "react-bootstrap/Container";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Player from "./components/Player";
import Game from "./components/Game";

import { useState } from "react";

export default function App() {
  const getAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      console.log(accounts);
      setAccount(accounts[0]);
    } else {
      console.log("Wallet not found.");
    }
  };

  const [account, setAccount] = useState("");
  const playerAccount = {
    account: account,
    setAccount: setAccount,
    getAccount: getAccount
  };

  return (
    <BrowserRouter>
      <Container>
        <Header account={account} />
        <Routes>
          <Route path="/" element={<Home getAccount={getAccount} />} />
          <Route path="/player" element={<Player account={account} />} />
          <Route path="/game" element={<Game />} />
          <Route />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
