import Web3 from "web3";
import { wethAddress, wethAbi } from "./ContractData";

const web3 = new Web3(window.ethereum);
const wethContract = new web3.eth.Contract(wethAbi, wethAddress);

export { web3, wethContract };
