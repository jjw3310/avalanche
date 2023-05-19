import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import logoHeart from "@assets/images/logoHeart.png";
import whiteHeart from "@assets/images/whiteHeart.png";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { useEffect, useState } from "react";

export default function InCardComments({ _id, _contents, _likes }) {
  const { userContract, commentContract, getContracts } = useWeb3();
  const { address, getAddress } = useWallet();
  const [userId, setUserId] = useState();
  const [isLiked, setIsLiked] = useState();

  useEffect(() => {
    getContracts();
    getAddress();
  }, []);

  useEffect(() => {
    if (userContract) {
      const getId = async () => {
        const userid = await userContract.methods.getIdFromAddress(_id).call();
        setUserId(userid);
        console.log(userid);
      };
      getId();
    }
    if (commentContract) {
      const getIsLiked = async () => {
        const likeRes = await userContract.methods.getIdFromAddress(_id).call();
        setIsLiked(likeRes);
        console.log(likeRes);
      };
      getIsLiked();
    }
  }, [userContract, commentContract]);

  return (
    <Box key={_id}>
      <Flex
        mt={"10px"}
        direction={"row"}
        ml={"20px"}
        justify={"flex-start"}
        align={"flex-start"}
        w={"100%"}
      >
        <IoPersonCircleOutline size={30} color="black" />
        <Flex
          ml={"10px"}
          mt={"2px"}
          fontSize={"16px"}
          lineHeight={["23px", null, "23px"]}
          color={"black"}
          fontWeight={"bold"}
          justify={"center"}
          align={"center"}
        >
          {userId}
        </Flex>
      </Flex>
      <Flex justify={"space-around"} align={"center"} w={"100%"}>
        <Text
          ml={"35px"}
          fontFamily="Raleway"
          fontStyle="normal"
          fontWeight={700}
          fontSize={["12px", null, "12px"]}
          lineHeight={["23px", null, "23px"]}
          color="#747474"
        >
          {_contents}
        </Text>
        <Box
          ml={"90px"}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          padding="5px 12px"
          // gap="10px"
          width="66px"
          height="30px"
          borderRadius="50px"
          flex="none"
          order={1}
          flexGrow={0}
        >
          {isLiked ? <Image src={logoHeart} /> : <Image src={whiteHeart} />}
          <Text color={"black"} ml={"5px"}>
            {isLiked}
          </Text>
        </Box>
      </Flex>
      <Divider
        mt="5px"
        orientation="horizontal"
        width="320px"
        borderColor="#ADADAD"
        borderWidth="1px"
        borderStyle="solid"
      />
    </Box>
  );
}
