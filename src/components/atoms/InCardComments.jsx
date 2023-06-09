import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import logoHeart from "@assets/images/logoHeart.png";
import whiteHeart from "@assets/images/whiteHeart.png";
import { useWallet, useWeb3 } from "@hooks/useAvax";
import { useEffect, useState } from "react";

export default function InCardComments({ yyyymmdd, comment }) {
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
      if (!comment.writer) return;
      // console.log("_id : ", comment.writer);
      const getId = async () => {
        const userid = await userContract.methods
          .getIdFromAddress(comment.writer)
          .call();
        setUserId(userid);
      };
      getId();
    }
    if (commentContract) {
      const getIsLiked = async () => {
        const isLiked = await commentContract.methods.getIsLiked();
        console.log("isLiked : ", isLiked);
      };
      getIsLiked();
    }
  }, [userContract, commentContract]);

  // useEffect(() => {
  // console.log("userid : ", userId);
  //   console.log(comment);
  // }, [userId]);

  const clickLikeBtn = async function (_yyyymmdd, _idx) {
    const res = await commentContract.methods
      .setLike(_yyyymmdd, _idx)
      .send({ from: address });
    console.log(res);
  };

  return (
    <Box key={comment.writer}>
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
          {comment.contents}
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
          <div>
            <button
              onClick={(event) => {
                event.stopPropagation();
                clickLikeBtn(yyyymmdd, comment.index);
              }}
            >
              {isLiked ? <Image src={logoHeart} /> : <Image src={whiteHeart} />}
            </button>
          </div>
          <Text color={"black"} ml={"5px"}>
            {comment.likes}
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
