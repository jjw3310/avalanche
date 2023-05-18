import {
  Box,
  // SimpleGrid,
  Flex,
  // chakra,
  Text,
  Image,
  Input,
  Stack,
  Heading,
  VStack,
  label,
  Textarea,
  Button,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import NavBar from "@components/templates/NavBar";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import previousMonth from "@assets/images/previousMonth.svg";
import nextMonth from "@assets/images/nextMonth.svg";
import littleStar from "@assets/images/littleStar.png";
import editPictureIcon from "@assets/images/editPictureIcon.png";

const GuestBook = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar />
      <Box
        ref={ref}
        w={"100%"}
        h={"1000px"}
        bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        // paddingBottom={"200px"}
      >
        {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify={"flex-start"}
          align={"center"}
          px={{ base: "20px", sm: "30px", lg: "50px" }}
          h="100%"
          pt={5}
          pb={5}
          flex="1"
        >
          {/* 전체 영역 */}
          <Box h="100%" mr={"30px"}>
            <Text
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight="700"
              fontSize="40px"
              lineHeight="47px"
              color="#FFFFFF"
            >
              Edit your day
            </Text>

            {/* 왼쪽 가장 큰 카드 */}
            <Box
              direction={"column"}
              justify={"center"}
              align={"center"}
              h="530px"
              bg="gray.400"
              flex="1"
              mt={"30px"}
              borderTopLeftRadius="30px"
              borderTopRightRadius="0px"
              borderBottomLeftRadius="30px"
            >
                {/* upper 줄 기능 */}
            <Box mt={"30px"}>
                <Flex ml={"20px"} mt={"15px"} direction={"row"} justify={"flex-start"} align={"center"} w={"100%"}>
                    <IoPersonCircleOutline size={30}/>
                    <Text ml={"10px"}>buyyourdate</Text>
                </Flex>
            </Box>

              {/* below 줄 기능 */}
              <Box
                position="relative"
                boxSizing="border-box"
                left="0px"
                top="48px"
                borderTopLeftRadius="0px"
                borderTopRightRadius="0px"
                borderBottomLeftRadius="30px"
                borderBottomRightRadius="0px"
                w={"100%"}
                h={"80px"}
              >
                <Flex
                  direction={"column"}
                  justify={"flex-start"}
                  align={"flex-start"}
                >
                  <Box
                    mt={"10px"}
                    ml={"20px"}
                    fontFamily={"Raleway"}
                    fontStyle={"normal"}
                    fontWeight={"700"}
                    fontSize={"16px"}
                    lineHeight={"23px"}
                    color={"#FFFFFF"}
                    justify={"center"}
                    align={"center"}
                  >
                    Date
                  </Box>

                  <Flex position={"relative"}>
                    <Image
                      src={littleStar}
                      position={"absolute"}
                      left={"-20px"}
                      bottom={"-30px"}
                      width={"100px"}
                      height={"100px"}
                    />
                    <Text
                      ml={"50px"}
                      mb={"2px"}
                      fontFamily={"Raleway"}
                      fontStyle={"normal"}
                      fontWeight={"700"}
                      fontSize={"20px"}
                      lineHeight={"38px"}
                      color={"#FFFFFF"}
                      // position={"relative"}
                    >
                      20230522
                    </Text>
                  </Flex>
                </Flex>
              </Box>



              
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
});

export default GuestBook;
