import React, { useState } from "react";
import { web3, wethContract } from "../Web3";

const WithdrawWeth = () => {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const withdraw = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    try {
      await wethContract.methods.withdraw(web3.utils.toWei(inputValue, "ether")).send({ from: account });
      alert("Withdrawn successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form>
      <label>
        Withdraw:
        <input type="text" placeholder="Enter WETH" onChange={handleChange} />
      </label>
      <button onClick={withdraw}>Deposit</button>
    </form>
  );
};

export default WithdrawWeth;
