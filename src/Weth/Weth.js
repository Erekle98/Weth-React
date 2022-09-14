import React from "react";
import WethBalance from "./WethBalance";
import DepositWeth from "./DepositWeth";
import WithdrawWeth from "./WithdrawWeth";
import TransferWeth from "./TransferWeth";

const Weth = () => {
  return (
    <div>
      <WethBalance />
      <DepositWeth />
      <WithdrawWeth />
      <TransferWeth />
    </div>
  );
};

export default Weth;
