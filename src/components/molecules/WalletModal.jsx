import React, { useEffect, useState } from "react";
import useAuth from "@components/hooks/useAuth";
import Wallet from "@components/atoms/Wallet";
import KIcon from "@components/atoms/KIcon";
import MetaMaskIcon from "@components/atoms/MetaMaskIcon";
import styled from "styled-components";
import * as colors from "src/components/styles/colors";
import { ethers } from "ethers";
import coreWallet from "@assets/images/coreWallet.svg";

import { v4 } from "uuid";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  Flex,
  Image,
  Tag,
  Avatar,
  TagLabel,
  useToast,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  useClipboard,
  AvatarBadge,
  Center,
  Stack,
  Divider,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Tooltip,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  CopyIcon,
  CheckCircleIcon,
  EditIcon,
  StarIcon,
  ViewIcon,
  TimeIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

const WalletBg = styled.div`
  display: flex;
  align-items: center;
  /* width: 100px; */
  margin-right: 10px;
  width: ${(props) => props.size};
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.buttOffColor};
  cursor: pointer;
  position: relative;
`;

const WalletBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.buttonOnColor};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
  padding: 7px;
  position: absolute;
  left: 1%;
`;

const WalletText = styled.span`
  margin: 0px 5px;
  font-size: 12px;
  color: ${colors.subtitleColor};
  position: absolute;
  display: flex;
  right: 12%;
  font-family: twayair;
`;

// buymea
// Contract Address & ABI
// const contractAddress = "0xDBa03676a2fBb6711CB652beF5B7416A53c1421D";
// const contractABI = abi.abi;


export default function WalletModal({
  contract_nft,
  contract_token,
  setSign,
  token,
  setToken,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const { user, setUser } = useAuth();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const btnRef = React.useRef();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  const [currentAccount, setCurrentAccount] = useState("");
  const [account, setAccount] = useState("");

  // const contractAddress = "0x067C45e36AcE35cfe1Ec70FA01cc2E5737a02618";
  // const contractABI = abi.abi;

  // Wallet connection logic




  const isWalletConnected = async () => {

    console.log("llll");
    if(window.ethereum) {
      try {
        const { ethereum } = window;

        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        console.log("accounts: ", accounts);
        setAccount(account[0])
        onClose();
      } catch(error) {
        console.log(error, "error connecting..")
      }

    } else {
      alert("Meta Mask is not detected")
    }
  }
    //   if (accounts.length > 0) {
    //     const account = accounts[0];

    //     setAccount(accounts[0]);
    //     console.log("wallet is connected! " + account);
    //   } else {
    //     console.log("make sure MetaMask is connected");
    //   }
    // } catch (error) {
    //   console.log("error: ", error);
    // }
  






  const connectWallet = async () => {
    try {
      const {ethereum} = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }







  ////todo : use callback 으로 App.js에서 재사용
  const connect = async () => {
    if (window.ethereum) {
      const metaTestChainId = "5"; //goerli 테스트넷 ("0x5")

      //현재 네트워크가 metaTestChainId와 다르면 return
      if (String(window.ethereum.networkVersion) !== metaTestChainId) {
        toast({
          title: `지원하지 않는 네트워크입니다.`,
          status: "error",
          isClosable: true,
        });
        return;
      }

      try {
        await window.ethereum.enable();
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setUser(res[0]);
        localStorage.setItem("_user", res[0]); //localStorage에 저장하는 함수
        localStorage.setItem(
          "_network",
          String(window.ethereum.networkVersion)
        ); //네트워크 저장
        const balance = await contract_nft.methods.balanceOf(res[0]).call();

        localStorage.setItem("_balanceNFT", balance);

        const tokenBalance = await contract_token.methods
          .balanceOf(res[0])
          .call();
        localStorage.setItem("_balanceToken", tokenBalance);
        setToken(tokenBalance);
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    } else {
      console.log("Install Metamask");
    }
  };









  const signWithMetamask = async () => {
    let signObj;
    const contractAddress = contract_token.address;
    const message = "contract address : " + contractAddress;
    try {
      signObj = await window.ethereum.request({
        method: "personal_sign",
        params: [message, window.ethereum.selectedAddress, v4()],
      });

      setSign(signObj);
    } catch (e) {
      console.log(e);
      disConnectWallet();
    }
  };

  const loginMetamask = () => {
    if (connect()) signWithMetamask();
  };

  const disConnectWallet = () => {
    setUser("");
    localStorage.removeItem("_user");
    localStorage.removeItem("_balanceNFT");
    localStorage.removeItem("_balanceToken");
  };







  return (
    <>
      <WalletBg
        size={user ? "150px" : "100px"}
        //onClick={user ? handleDone : handleLogin}
        onClick={user ? onOpen2 : onOpen}
        className="btn"
        data-tip
        data-for="tooltip"
      >
        <WalletBox>{user ? <MetaMaskIcon /> : <Wallet />}</WalletBox>
        <WalletText user={user}>
          {user ? `${user.slice(0, 13)}...` : "지갑연결"}
        </WalletText>
      </WalletBg>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={"gray.700"}>
          <ModalHeader color={"white"}>지갑 연결하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text color={"white"} fontWeight="bold" mb="1rem">
              연결할 지갑을 선택해 주세요
            </Text>

            <Flex flexDirection={"column"} gap={"3px"}>
              <Tag
                size="lg"
                colorScheme=""
                borderRadius="full"
                _hover={{
                  bg: "black",
                  cursor: "pointer",
                }}
                onClick={() => {
                  isWalletConnected();
                  // onClose();
                }}  
              >
                <Avatar
                  src="https://www.blockmedia.co.kr/wp-content/uploads/2021/11/%EB%A9%94%ED%83%80%EB%A7%88%EC%8A%A4%ED%81%AC.jpg"
                  size="xs"
                  name="metamask"
                  ml={-1}
                  mr={2}
                />
                <TagLabel color={"white"}>메타마스크</TagLabel>
              </Tag>
              <Tag
                size="lg"
                colorScheme=""
                borderRadius="full"
                _hover={{
                  bg: "black",
                  cursor: "pointer",
                }}
                onClick={() => alert("준비중입니다")}
              >
                <Avatar
                  src={coreWallet}
                  size="xs"
                  name="metamask"
                  ml={-1}
                  mr={2}
                />
                <TagLabel color={"white"}>코어 웹 지갑</TagLabel>
              </Tag>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme="whiteAlpha">
              취소
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
