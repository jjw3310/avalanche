import {
  Box,
  Flex,
  Divider,
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
import React, { useState, useEffect } from "react";
import previousMonth from "@assets/images/previousMonth.svg";
import nextMonth from "@assets/images/nextMonth.svg";
import littleStar from "@assets/images/littleStar.png";
import editPictureIcon from "@assets/images/editPictureIcon.png";
import { Link } from "react-router-dom";
import { Calendar, CalendarDay, CalendarMonth } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import emptyHeart from "@assets/images/emptyHeart.png";
import todayDateNFT from "@assets/images/todayDateNFT.png";
import logoHeart from "@assets/images/logoHeart.png";
import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";
import celebrateIcon from "@assets/images/celebrateIcon.png";


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
            h={"800px"}
            bgGradient={"linear(to-l,#8c1eaa,#272842)"}
            // paddingBottom={"200px"}
        >
            {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
            <Flex
                direction={{ base: "column-reverse", md: "row" }}
                justify={"flex-start"}
                align={"space-around"}
                px={{ base: "20px", sm: "30px", lg: "50px" }}
                h="100%"
                pt={5}
                pb={5}
                flex="1"
            >

            {/* 왼쪽 전체 영역 */}
            <Box h="100%">
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
                    justify={"flex-start"}
                    align={"space-around"}
                    w="400px"
                    h="530px"
                    bg="tomato"
                    flex="1"
                    borderTopLeftRadius="30px"
                    borderTopRightRadius="0px"
                    borderBottomLeftRadius="30px"
                >
                    {/* upper 파트 기능 */}
                    <Box mt={"30px"}>
                        <Flex
                            ml={"20px"}
                            direction={"row"}
                            justify={"flex-start"}
                            align={"center"}
                            w={"100%"}
                        >
                            <IoPersonCircleOutline size={30} />
                            <Text ml={"10px"}>buyyourdate</Text>
                        </Flex>
                    </Box>

                    {/* below 파트 기능 */}
                    <Box
                        position="relative"
                        boxSizing="border-box"
                        left="0px"
                        top="420px"
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

            {/* 오른쪽 가장 큰 카드 */}
            <Box
                background="gray.400"
                boxSizing="border-box"
                borderTopLeftRadius="0px"
                borderTopRightRadius="30px"
                borderBottomLeftRadius="00px"
                borderBottomRightRadius="30px"
                w={"100%"}
                h={"530px"}
                mt={"77px"}
                >
                <Flex 
                    direction={"column"} 
                    justify={"flex-start"} 
                    align={"flex-start"} 
                >
                    <Box ml={"20px"} mt={"30px"} mb={"10px"} >
                    <Flex 
                        direction={"row"} 
                        justify={"flex-start"} 
                        align={"center"}    
                        pb={"10px"}                 
                        borderBottomColor="#ADADAD"
                        borderTopColor="transparent"
                        borderLeftColor="transparent"
                        borderRightColor="transparent"
                        borderBottomWidth="2px"
                    >
                        <Image src={celebrateIcon} />
                        <Text
                        ml={"15px"}
                        fontFamily={"Raleway"}
                        fontStyle={"normal"}
                        fontWeight={"700"}
                        fontSize={"18px"}
                        lineHeight={"21px"}
                        color={"#000000"}
                        >
                        Today’s top 4 comments
                        </Text>
                        <Button
                        // position={"relative"}
                        ml={"170px"}
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        padding="5px 12px"
                        width="140px"
                        height="40px"
                        gap={"5px"}
                        background="#FFFFFF"
                        borderRadius="50px"
                        flex="none"
                        order={1}
                        flexGrow={0}
                        >
                            <Text 
                            mr={"5px"}
                            color={"black"}
                        >
                            Today
                        </Text>
                        <Image src={logoHeart} />
                        <Text 
                            mr={"5px"}
                            color={"black"}
                        >
                            170
                        </Text>
                        </Button>
                    </Flex>
                    </Box>

                    {/* 방명록 댓글 #Set1 시작 부분 */}
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
                        73elliot
                    </Flex>
                    </Flex>
                    <Flex justify={"space-between"} align={"center"} w={"100%"}>
                    <Text
                        ml={"80px"}
                        fontFamily="Raleway"
                        fontStyle="normal"
                        fontWeight={700}
                        fontSize={["12px", null, "12px"]}
                        lineHeight={["23px", null, "23px"]}
                        color="#747474"
                    >
                        Today is our anniversary :)
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
                        42
                        </Text>
                    </Box>
                    </Flex>

                    {/* 댓글 쓰는 기능 */}
                    <Flex>
                        <Box
                            background="gray.400"
                            boxSizing="border-box"
                            borderTopLeftRadius="0px"
                            borderTopRightRadius="30px"
                            borderBottomLeftRadius="00px"
                            borderBottomRightRadius="30px"
                            w={"100%"}
                            h={"530px"}
                            mt={"77px"}
                        >
                        <Flex 
                            direction={"column"} 
                            justify={"flex-start"} 
                            align={"flex-start"} 
                        >
                        <Box ml={"20px"} mt={"30px"} mb={"10px"} >
                            <Flex 
                                direction={"row"} 
                                justify={"flex-start"} 
                                align={"center"}    
                                pb={"10px"}                 
                                borderBottomColor="#ADADAD"
                                borderTopColor="transparent"
                                borderLeftColor="transparent"
                                borderRightColor="transparent"
                                borderBottomWidth="2px"
                            >
                                <Image src={celebrateIcon} />
                                <Text
                                ml={"15px"}
                                fontFamily={"Raleway"}
                                fontStyle={"normal"}
                                fontWeight={"700"}
                                fontSize={"18px"}
                                lineHeight={"21px"}
                                color={"#000000"}
                                >
                                Today’s top 4 comments
                                </Text>
                                <Button
                                // position={"relative"}
                                ml={"170px"}
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="center"
                                padding="5px 12px"
                                width="140px"
                                height="40px"
                                gap={"5px"}
                                background="#FFFFFF"
                                borderRadius="50px"
                                flex="none"
                                order={1}
                                flexGrow={0}
                                >
                                    <Text 
                                    mr={"5px"}
                                    color={"black"}
                                >
                                    Today
                                </Text>
                                <Image src={logoHeart} />
                                <Text 
                                    mr={"5px"}
                                    color={"black"}
                                >
                                    170
                                </Text>
                                </Button>
                            </Flex>
                        </Box>

                    </Flex>
                        </Box>
                    </Flex>

                </Flex>
            </Box>


        </Flex>
        </Box>
    </>
  );
});

export default GuestBook;
