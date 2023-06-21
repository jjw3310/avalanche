import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  userContABI,
  dateContABI,
  commentContABI,
  USER_CONTRACT_ADDRESS,
  DATE_CONTRACT_ADDRESS,
  COMMENT_CONTRACT_ADDRESS,
} from "../web3.config.js";
import { useToast } from "@chakra-ui/react";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [userContract, setUserContract] = useState();
  const [dateContract, setDateContract] = useState();
  const [commentContract, setCommentContract] = useState();

  useEffect(() => {
    if (!window.ethereum) return;
    // console.log("window.ethereum");
    // console.log(window.ethereum);
    // console.log("window.ethereum.coreProvider");
    // console.log(window.ethereum.coreProvider);
    // console.log("window.ethereum.Provider");
    // console.log(window.ethereum.Provider);
    // console.log("new Web3(window.ethereum.coreProvider)");
    // console.log(new Web3(window.ethereum.coreProvider));
    let core = new Web3(window.ethereum.coreProvider);
    let cont = new core.eth.Contract(userContABI, USER_CONTRACT_ADDRESS);
    // console.log("cont : ", cont);

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
  const [chainId, setChainId] = useState();
  const toast = useToast();
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

  const changeChainId = async () => {
    if (window.ethereum) {
      const prevChainId = window.ethereum.chainId;
      const chainIdHex = `0x${"a869".toString(16)}`;
      // console.log(prevChainId);
      // console.log(chainIdHex);
      if (prevChainId === chainIdHex) return;
      setChainId(chainIdHex);

      await window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainIdHex }],
        })
        .then(() => {
          // console.log("Chain changed successfully!");
          toast({
            title: "Network Changed.",
            description: "We've changed to Avalanche Fuji Testnet.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error("Error switching chain:", error);
        });
    }
  };
  useEffect(() => {
    changeChainId();
  }, []);
  return { address, getAddress };
};
