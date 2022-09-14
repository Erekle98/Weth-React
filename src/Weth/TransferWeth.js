import React, { useState } from "react";
import { web3, wethContract } from "../Web3";

const TransferWeth = () => {
  const [receiverInputValue, setReceiverInputValue] = useState(null);
  const [transferInputValue, setTransferInputValue] = useState(null);

  const handleReceiverChange = (e) => {
    setReceiverInputValue(e.target.value);
  };
  const handleTransferChange = (e) => {
    setTransferInputValue(e.target.value);
  };

  const transfer = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    try {
      await wethContract.methods
        .transfer(receiverInputValue, web3.utils.toWei(transferInputValue, "ether"))
        .send({ from: account });
      alert("Transfered successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form>
      <label>
        Transfer:
        <input type="text" placeholder="Enter Address" onChange={handleReceiverChange} />
        <input type="number" placeholder="Enter WETH" onChange={handleTransferChange} />
      </label>
      <button onClick={transfer}>Transfer</button>
    </form>
  );
};

export default TransferWeth;
