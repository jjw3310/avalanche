import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import logoHeart from "@assets/images/logoHeart.png";
import { useEffect, useState } from "react";

export default function GuestComment({ _id, comment }) {
  return comment ? (
    <>
      <Flex
        mt={"10px"}
        direction={"row"}
        ml={"20px"}
        justify={"flex-start"}
        align={"flex-start"}
        w={"650px"}
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
          {_id}
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        w={"100%"}
      >
        <Flex
          direction={"row"}
          justify={"space-between"}
          align={"center"}
          w={"100%"}
        >
          <Text
            ml={"50px"}
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
            mr={"30px"}
          >
            <Image src={logoHeart} />
            <Text color={"black"} ml={"5px"}>
              {comment.likes}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  ) : (
    ""
  );
}
