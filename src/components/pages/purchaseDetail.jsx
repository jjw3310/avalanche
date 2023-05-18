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
// import editPictureSection from "@assets/images/editPictureSection.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import previousMonth from "@assets/images/previousMonth.svg";
import nextMonth from "@assets/images/nextMonth.svg";
import littleStar from "@assets/images/littleStar.png";
import editPictureIcon from "@assets/images/editPictureIcon.png";

const PurchaseDetail = forwardRef((props, ref) => {
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
              borderRadius={"30px"}
              h="530px"
              bg="white"
              flex="1"
              mt={"30px"}
            >
              <Box mt={"30px"}>
                {/* 1번째 줄 기능 */}
                <Flex justify={"space-around"} align={"center"}>
                  <Image src={previousMonth} />
                  <Flex
                    py={3}
                    fontFamily="Poppins"
                    fontStyle="normal"
                    fontWeight={700}
                    fontSize={["20px", null, "25.7447px"]}
                    lineHeight={["23px", null, "39px"]}
                    color="#000000"
                  >
                    Date's
                  </Flex>
                  <Image src={nextMonth} />
                </Flex>
              </Box>

              {/* 2번째 줄 기능 */}
              <Box
                position={"relative"}
                justify={"center"}
                align={"center"}
                borderRadius={"30px"}
                borderColor="#ADADAD"
                borderWidth="1px"
                borderStyle="solid"
                w="300px"
                h="300px"
                mt={"39px"}
                bg="white"
                boxShadow="base"
                p={4}
                filter="drop-shadow(0 0 10px rgba(0, 0, 0, 0.2))"
              >
                <Image
                  position={"absolute"}
                  top={"130px"}
                  left={"130px"}
                  src={editPictureIcon}
                />
              </Box>

              {/* 3번째 줄 기능 */}
              <Box
                background="linear-gradient(180deg, rgba(52, 71, 88, 0.9) 0%, rgba(56, 89, 120, 0) 100%)"
                position="relative"
                boxSizing="border-box"
                left="0px"
                top="48px"
                border="1px solid #ADADAD"
                borderTopLeftRadius="0px"
                borderTopRightRadius="0px"
                borderBottomRightRadius="30px"
                borderBottomLeftRadius="30px"
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

                    <Button
                      mt={"5px"}
                      ml={"120px"}
                      mr={"30px"}
                      w={"100%"}
                      h={"30px"}
                      borderRadius={"20px"}
                      _hover={{ bg: "purple.500" }}
                    >
                      <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                          <Box
                            fontWeight={"500"}
                            color="black"
                            fontStyle={"normal"}
                            fontSize={{ base: "10px", md: "15px" }}
                            lineHeight={"30px"}
                            _hover={{
                              textDecoration: "none",
                              color: "linkHoverColor",
                            }}
                            href="/"
                            target="_blank"
                          >
                            Mint the date
                          </Box>
                        </PopoverTrigger>
                      </Popover>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>


          {/* 오른쪽 영역 */}
          <Box
            h="100%"
            ml={"20px"}
            direction={{ base: "column-reverse", md: "row" }}
            justify={"flex-start"}
            px={{ base: "20px", sm: "30px", lg: "50px" }}
            align={"flex-start"}
          >
            <Text
              mt={"80px"}
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              lineHeight="23px"
              color="#FFFFFF"
            >
              <label for="input">My date</label>
            </Text>
            
            {/* 1번째 input tag */}
            <Box position="relative" width="283px">
              <Input
                mt="20px"
                color="black"
                type="text"
                placeholder="Select a date"
                background="rgba(226, 226, 226, 0.96)"
                borderRadius="10px"
                paddingRight={isOpen ? "2.5rem" : "0.75rem"}
                onClick={toggleInfo}
              />
              <Box
                position="absolute"
                right={isOpen ? "0.75rem" : "1.25rem"}
                top="50%"
                fontSize="16px"
                color="blue.500"
                cursor="pointer"
                transition="transform 0.3s"
                transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
                zIndex={1}
              >
                &#9660;
              </Box>
              {isOpen && (
                <Box
                  position="absolute"
                  width="100%"
                  top="calc(100%)"
                  left="0"
                  zIndex={2}
                >
                  <Box
                    bg="white"
                    borderRadius="10px"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                    p="10px"
                  >
                    <Text color="black">May 1, 2023</Text>
                    <Text color="black" mt="10px">
                      May 10, 2023
                    </Text>
                    <Text color="black" mt="10px">
                      May 17, 2023
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>



            <Text
              mt={"150px"}
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              lineHeight="23px"
              color="#FFFFFF"
            >
              <label for="input">Date’s title</label>
            </Text>
            <Input
              mt={"20px"}
              color="black"
              type="text"
              placeholder="Give your date a special title."
              width="600px"
              background="rgba(226, 226, 226, 0.96)"
              borderRadius="10px"
            />
            <Text
              direction={{ base: "column-reverse", md: "row" }}
              justify="flex-end"
              align="flex-end"
              ml={"565px"}
              fontFamily="sans-serif"
              fontSize="14px"
              color="gray.500"
            >
              0/30
            </Text>

            <Text
              mt={"80px"}
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={700}
              fontSize="20px"
              lineHeight="23px"
              color="#FFFFFF"
            >
              <label for="input">Description for the date</label>
            </Text>
            <Textarea
              mt="20px"
              color="black"
              placeholder="Share the magic of your special date. Describe the cherished moments, emotions, and significance  that 
                  make it unforgettable. Tell the story, highlight the meaning, and bring your memories to life in a lasting tribute 
                  to your treasured experience.      "
              width="600px"
              height="200px"
              background="rgba(226, 226, 226, 0.96)"
              borderRadius="10px"
            />
            <Text
              mt="2"
              justify="flex-end"
              align="flex-end"
              fontFamily="sans-serif"
              fontSize="14px"
              color="gray.500"
              ml={"565px"}
            >
              0/500
            </Text>
            <Button
              borderRadius={"20px"}
              _hover={{ bg: "purple.500" }}
              mt={"100px"}
            >
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    p={1}
                    // mt={"164px"}
                    fontWeight={"500"}
                    color="black"
                    fontStyle={"normal"}
                    fontSize={{ base: "10px", md: "16px" }}
                    lineHeight={"30px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    _hover={{
                      textDecoration: "none",
                      color: "linkHoverColor",
                    }}
                    href="/"
                    target="_blank"
                  >
                    Submit
                  </Box>
                </PopoverTrigger>
              </Popover>
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
});

export default PurchaseDetail;
