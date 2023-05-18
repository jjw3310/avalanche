import NavBar from "@components/templates/NavBar";

import Introduce from "@components/templates/Introduce";
import Calender from "@components/templates/Calender";
import Description from "@components/templates/Description";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState, useEffect } from "react";

import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../web3.config";
// import { useGasless } from "@hooks/useGasless";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export default function MainPage({ account }) {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
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
  return (
    <>
      <NavBar
      // currentVisibleIndex={currentVisibleIndex}
      // onClickNavLink={handleClickNavLink}
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
