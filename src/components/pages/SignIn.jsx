import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@components/templates/NavBar";

export default function SignIn({
  callSignIn,
  setInputId,
  inputId,
  setInputPass,
  inputPass,
  account,
}) {
  // const [inputId, setInputId] = useState();
  // const [inputPass, setInputPass] = useState();
  const { userContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();
  // const [account, setAccount] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getContracts();
    getAddress();
  }, [account]);

  // const callSignIn = async function (_id, _pass) {
  //   const res = await userContract.methods
  //     .login(_id, _pass)
  //     .call()
  //     .catch((err) => {
  //       alert("로그인 실패");
  //     });
  //   if (res) {
  //     alert("로그인 성공");
  //     setAccount(_id);
  //     navigate({
  //       pathname: "/",
  //       state: { account: _id },
  //     });
  //   }
  // };

  return (
    <Box>
      {/* <NavBar
        // signUp={signUp}
        signIn={callSignIn}
        address={address}
        account={account}
      /> */}
      <Box pt={"100px"}>
        <Flex direction="column">
          <Input
            w={"300px"}
            onChange={(e) => {
              setInputId(e.target.value);
            }}
            value={inputId}
          />
          <Input
            w={"300px"}
            onChange={(e) => {
              setInputPass(e.target.value);
            }}
            value={inputPass}
          />
          <Button
            bgColor={"white"}
            color={"black"}
            w={"300px"}
            onClick={() => {
              callSignIn(inputId, inputPass);
              navigate("/");
            }}
          >
            로그인
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
