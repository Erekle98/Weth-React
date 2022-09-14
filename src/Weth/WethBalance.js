import React, { useState } from "react";
import { web3, wethContract } from "../Web3";

const WethBalance = () => {
  const [wethBalance, setWethBalance] = useState(null);

  async function getBalance() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    let balance = await wethContract.methods.balanceOf(account).call();
    balance = web3.utils.fromWei(balance, "ether");
    setWethBalance(parseFloat(balance).toFixed(4) + " WETH");
  }

  getBalance();

  return (
    <div>
      <h1>Weth</h1>
      <p>Balance: {wethBalance}</p>
    </div>
  );
};

export default WethBalance;
