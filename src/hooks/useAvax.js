import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  userContABI,
  dateContABI,
  commentContABI,
  USER_CONTRACT_ADDRESS,
  DATE_CONTRACT_ADDRESS,
  COMMENT_CONTRACT_ADDRESS,
} from "./web3_data.js";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [userContract, setUserContract] = useState();
  const [dateContract, setDateContract] = useState();
  const [commentContract, setCommentContract] = useState();

  useEffect(() => {
    if (!window.ethereum) return;
    setWeb3(new Web3(window.ethereum));
  }, []);

  const getContracts = async () => {
    try {
      if (!web3) return;
      await setUserContract(
        new web3.eth.Contract(userContABI, USER_CONTRACT_ADDRESS)
      );
      await setDateContract(
        new web3.eth.Contract(dateContABI, DATE_CONTRACT_ADDRESS)
      );
      await setCommentContract(
        new web3.eth.Contract(commentContABI, COMMENT_CONTRACT_ADDRESS)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContracts();
  }, [web3]);
  return { userContract, dateContract, commentContract, getContracts };
};

export const useWallet = () => {
  const [address, setAddress] = useState("");
  const getAddress = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAddress(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAddress();
  }, []);
  return { address, getAddress };
};
