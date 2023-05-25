import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import React, { useEffect, useState } from "react";

export default function SignUp() {
  const [inputId, setInputId] = useState();
  const [inputPass, setInputPass] = useState();
  const { userContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();

  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  const callSignUp = async function (_id, _pass) {
    const res = await userContract.methods
      .signUp(_id, _pass)
      .send({ from: address });

    if (res) alert("가입 성공");
  };

  return (
    <Box>
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
              callSignUp(inputId, inputPass);
            }}
          >
            회원가입
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
