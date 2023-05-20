import { 
  Text, 
  Box, 
  Button, 
  Flex, 
  Input, 
  Divider
} from "@chakra-ui/react";
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
  }, [userContract]);

  const callSignUp = async function (_id, _pass) {
    const res = await userContract.methods
      .signUp(_id, _pass)
      .send({ from: address })
      .then(alert("가입 성공"));
  };

  return (
    <Box
      w={"100%"}
      h={"550px"}
      py={"100px"}  
    >
      <Flex 
        justify={"center"} 
        align={"center"}
        direction={{ base: "column-reverse", md: "row" }}
        alignItems={"flex-start"}
        px={{ base: "20px", sm: "30px", lg: "50px" }}
        h="100%"
        pt={5}
        pb={5}
      >
        <Box pt={"100px"}>
          <Flex direction="column" >
            {/* ID */}
            <Text paddingTop={"5"} paddingBottom={"5"} >ID</Text>
            <Input
              w={"300px"}
              onChange={(e) => {
                setInputId(e.target.value);
              }}
              value={inputId}
            />
            {/* password */}
            <Text paddingTop={"5"} paddingBottom={"5"} >Password</Text>
            <Input
              w={"300px"}
              onChange={(e) => {
                setInputPass(e.target.value);
              }}
              value={inputPass}

            />
            <Button
              mt="10%"
              bgColor={"white"}
              color={"black"}
              w={"300px"}
              onClick={() => {
                callSignUp(inputId, inputPass);
              }}
            >
              회원가입
            </Button>
            {/* <Flex paddingTop={"10"} direction={"row"} justify={"center"} align={"center"} h="10%">
              <Divider justify={"center"} mr="5%" orientation="horizontal" width="55px" borderColor="white" borderWidth="1px" borderStyle="solid"/>
                <Text>또는 지갑으로 로그인</Text>
              <Divider justify={"center"} ml="5%" orientation="horizontal" width="55px" borderColor="white" borderWidth="1px" borderStyle="solid"/>
            </Flex> */}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
