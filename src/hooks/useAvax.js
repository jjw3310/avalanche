import { useEffect, useState } from "react";
import Web3 from "web3";
import { contractABI, userContABI } from "../hooks/abi.js";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [contract, setContract] = useState();
  const [userContract, setUserContract] = useState();

  useEffect(() => {
    if (!window.ethereum) return;
    setWeb3(new Web3(window.ethereum));
  }, []);

  const getContracts = async () => {
    try {
      if (!web3) return;
      await setContract(
        new web3.eth.Contract(
          contractABI,
          process.env.REACT_APP_COUNTER_CONTRACT_ADDRESS
        )
      );

      await setUserContract(
        new web3.eth.Contract(
          userContABI,
          process.env.REACT_APP_USER_CONTRACT_ADDRESS
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContracts();
  }, [web3]);
  return { contract, userContract, getContracts };
};

export const useWallet = () => {
  const [account, setAccount] = useState("");
  const getAddress = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAddress();
  }, []);
  return { account, getAddress };
};
