import React, { useState } from "react";
import { web3, wethContract } from "../Web3";

const DepositWeth = () => {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const deposit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    try {
      await wethContract.methods.deposit().send({ from: account, value: web3.utils.toWei(inputValue, "ether") });
      alert("Deposited successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form>
      <label>
        Deposit:
        <input type="text" placeholder="Enter WETH" onChange={handleChange} />
      </label>
      <button onClick={deposit}>Deposit</button>
    </form>
  );
};

export default DepositWeth;
