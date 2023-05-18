import NavBar from "@components/templates/NavBar";

import Introduce from "@components/templates/Introduce";
import Calender from "@components/templates/Calender";
import Description from "@components/templates/Description";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState, useEffect } from "react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { Button } from "@chakra-ui/react";
// import { useGasless } from "@hooks/useGasless";

import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../web3.config";
// import { useGasless } from "@hooks/useGasless";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export default function MainPage() {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { contract, userContract, dateContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();
  const [account, setAccount] = useState();
  const [inputAcnt, setInputAcnt] = useState("testing");
  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNft(response);
      //   console.log(response);
      //   setPage(parseInt((parseInt(response) - 1) / 10) + 1);
      setPage(Math.floor(parseInt(response - 1) / 3) + 1);
      //   console.log(page);
      // 10 - 1 = 9 / 10 = 0 + 1= 1page
    } catch (error) {
      console.error(error);
    }
  };
  const getMyNft = async () => {
    try {
      if (!contract || !account) return;
      const response = await contract.methods.balanceOf(account).call();
      console.log("내꺼 : " + response);
      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);
  useEffect(() => {
    getMyNft();
  }, [account]);

  //   useGasless();
  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  const getCont = async () => {
    try {
      if (!contract) return;
      console.log("account:", address);
      const response = await contract.methods
        .increment()
        .send({ from: address });
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async () => {
    try {
      if (!userContract) return;
      const response = await userContract.methods
        .signUp("test", "1234")
        .send({ from: address });
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      if (!userContract) return;
      const response = await userContract.methods
        .login(inputAcnt, "1234")
        .call()
        .then((res) => {
          if (res) {
            setAccount(inputAcnt);
            alert("로그인 성공");
          } else {
            alert("로그인 실패");
          }
        });
      // console.log("login:", response.data);
    } catch (error) {
      console.error(error);
      alert("로그인 실패");
    }
  };

  const mintDate = async () => {
    try {
      if (!dateContract) return;
      await dateContract.methods
        .mintCommon(20230518)
        .send({ from: address })
        .then(console.log);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          mintDate();
        }}
        color={"blue"}
      >
        Test BTN
      </Button>
      <NavBar
        // currentVisibleIndex={currentVisibleIndex}
        // onClickNavLink={handleClickNavLink}
        signUp={signUp}
        signIn={signIn}
        address={address}
        account={account}
      />
      <Introduce />
      <Calender
        selected={selectedDate}
        onSelectDate={setSelectedDate}
        totalNft={totalNft}
        mintedNft={mintedNft}
        myNft={myNft}
        page={page}
      />
      <Description />
      <Faq />
      <Footer />
    </>
  );
}
