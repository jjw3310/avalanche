import NavBar from "@components/templates/NavBar";

import Introduce from "@components/templates/Introduce";
import Calender from "@components/templates/Calender";
import Description from "@components/templates/Description";

import Faq from "@components/templates/Faq";
import Footer from "@components/templates/Footer";

import { useState } from "react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
// import { useGasless } from "@hooks/useGasless";

export default function MainPage() {
  const { userContract, dateContract, commentContract, getContracts } =
    useWeb3();
  const { address, getAddress } = useWallet();
  const [account, setAccount] = useState();
  const [inputAcnt, setInputAcnt] = useState("test");
  const [nftInfo, setNftInfo] = useState();
  //   useGasless();
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  let yyyymmdd = year + month + day;
  console.log(yyyymmdd);

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
        .mintCommon(0, season, 20230518, address)
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
      let userNftInfo = await dateContract.methods
        .getDayNftInfo(_yyyymmdd)
        .call();
      let jsonDate = await dateContract.methods.tokenURI(_yyyymmdd).call();
      console.log(userNftInfo);
      console.log(jsonDate);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodayNft(20230518);
    console.log("NFT DATA", nftInfo);
  }, [dateContract]);

  return (
    <>
      <Button
        onClick={() => {
          mintDate("2023", 20230518);
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
      <Calender />
      <Description />
      <Faq />
      <Footer />
    </>
  );
}
