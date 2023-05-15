import React from "react";
import {
  Box,
  Flex,
  // chakra,
  Text,
  // SimpleGrid,
  // Image,
  // Icon,
  // createIcon,
} from "@chakra-ui/react";

import Discord from "@components/atoms/Discord";
import Instagram from "@components/atoms/Instagram";
import Telegram from "@components/atoms/Telegram";
import Twitter from "@components/atoms/Twitter";
import Youtube from "@components/atoms/Youtube";

export default function Footer() {
  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        h={"60px"}
        borderTop={1}
        // borderStyle={"solid"}
        // borderColor={"gray.300"}
        pl={{ base: "5px", sm: "10px", md: "70px" }}
        pr={{ base: "40px", sm: "70px" }}
        bgGradient={"linear(to-l,#8c1eaa,#272842)"}
      >
        <Flex direction={"column"} gap={"2px"}>
          <Text
            fontWeight={"700"}
            fontSize={{ base: "5px", sm: "14px" }}
            lineHeight={"16.94px"}
            color={"#6F6F6F"}
          >
            Team VVV
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={{ base: "5px", sm: "14px" }}
            lineHeight={"16.94px"}
            color={"#6F6F6F"}
          >
            aslanacademy.org
          </Text>
        </Flex>
        <Flex gap={{ base: "15px", sm: "30px" }}>
          <Box
            boxSize={{ base: "15px", sm: "20px" }}
            _hover={{
              cursor: "pointer",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Discord />
          </Box>
          <Box
            boxSize={{ base: "15px", sm: "20px" }}
            _hover={{
              cursor: "pointer",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Youtube />
          </Box>
          <Box
            boxSize={{ base: "15px", sm: "20px" }}
            _hover={{
              cursor: "pointer",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Instagram />
          </Box>
          <Box
            boxSize={{ base: "15px", sm: "20px" }}
            _hover={{
              cursor: "pointer",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Telegram />
          </Box>
          <Box
            boxSize={{ base: "15px", sm: "20px" }}
            _hover={{
              cursor: "pointer",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Twitter />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
