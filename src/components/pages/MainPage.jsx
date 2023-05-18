import NavBar from "@components/templates/NavBar";

import Introduce from "@components/templates/Introduce";
import Calender from "@components/templates/Calender";
import Description from "@components/templates/Description";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState, useEffect } from "react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { Box, Button } from "@chakra-ui/react";
import backIMG from "../../assets/images/DistanceStars.png";
import Web3 from "web3";

// import {
//   CONTRACT_ABI,
//   CONTRACT_ADDRESS,
// } from "../../web3.config.js";

// const web3 = new Web3(window.ethereum);
// const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export default function MainPage() {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { userContract, dateContract, commentContract, getContracts } =
    useWeb3();
  const { address, getAddress } = useWallet();
  const [account, setAccount] = useState();
  const [inputAcnt, setInputAcnt] = useState("test");
  const [nftInfo, setNftInfo] = useState();
  // const getTotalNft = async () => {
  //   try {
  //     if (!contract) return;

  //     const response = await contract.methods.totalNft().call();

  //     setTotalNft(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const getMintedNft = async () => {
  //   try {
  //     if (!contract) return;

  //     const response = await contract.methods.totalSupply().call();

  //     setMintedNft(response);
  //     //   console.log(response);
  //     //   setPage(parseInt((parseInt(response) - 1) / 10) + 1);
  //     setPage(Math.floor(parseInt(response - 1) / 3) + 1);
  //     //   console.log(page);
  //     // 10 - 1 = 9 / 10 = 0 + 1= 1page
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const getMyNft = async () => {
  //   try {
  //     if (!contract || !account) return;
  //     const response = await contract.methods.balanceOf(account).call();
  //     console.log("내꺼 : " + response);
  //     setMyNft(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   getTotalNft();
  //   getMintedNft();
  // }, []);
  // useEffect(() => {
  //   getMyNft();
  // }, [account]);

  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  let todayYYYYMMDD = year + month + day;
  console.log(todayYYYYMMDD);

  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

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
    } catch (error) {
      console.error(error);
      alert("로그인 실패");
    }
  };

  const mintDate = async (season, _yyyymmdd) => {
    try {
      if (!dateContract) return;
      await dateContract.methods
        .mintCommon(0, season, _yyyymmdd, address)
        .send({ from: address })
        .then(console.log);
    } catch (error) {
      console.error(error);
    }
  };

  const getTodayNft = async (_yyyymmdd) => {
    try {
      if (!dateContract) {
        return;
      }
      let todayNftInfo = await dateContract.methods
        .getDayNftInfo(_yyyymmdd)
        .call();
      let jsonDate = await dateContract.methods.tokenURI(_yyyymmdd).call();
      if (todayNftInfo.showDefaultImg) {
        console.log("변경한 url이 존재함");
      } else {
        console.log("기본 이미지 출력");
        let metadataUrl = jsonDate;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodayNft(todayYYYYMMDD);
    console.log("NFT DATA", nftInfo);
  }, [dateContract]);

  return (
    <>
      <Box bg={`url(${backIMG})`} bgSize={"100%"}>
        <Button
          onClick={() => {
            mintDate("2023", todayYYYYMMDD);
          }}
          color={"blue"}
        >
          Test BTN
        </Button>
        <Button
          onClick={() => {
            getTodayNft();
          }}
          color={"blue"}
        >
          Test BTN2
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
      </Box>
    </>
  );
}
