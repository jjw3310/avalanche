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
  const { contract, userContract, dateContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();
  const [account, setAccount] = useState();
  const [inputAcnt, setInputAcnt] = useState("testing");
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
      <Calender />
      <Description />
      <Faq />
      <Footer />
    </>
  );
}
