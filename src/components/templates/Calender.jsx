import {
  Box,
  // SimpleGrid,
  Flex,
  // chakra,
  Text,
  Image,
  Stack,
  Heading,
  VStack,
  UnorderedList,
  Button,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import previousMonth from "@assets/images/previousMonth.svg";
import nextMonth  from "@assets/images/nextMonth.svg";
import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import emptyHeart from "@assets/images/emptyHeart.png";

const Calender = forwardRef((props, ref) => {
  return (
    <>
      <Box 
        ref={ref} 
        w={"100%"} 
        h={"600px"} 
        bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        // paddingBottom={"200px"}
      >
        {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
        <Flex
          alignItems={"flex-start"}
          direction={{ base: "column-reverse", md: "row" }}
          justify={"flex-end"}
          px={{ base: "20px", sm: "30px", lg: "50px" }}
          align={"center"}
          h="100%"
          pt={5}
          pb={5}
        >
          {/* 큰 캘린더 */}
          {/* <Box borderRadius={"30px"} h="100%" bg="gray.500" mr={"20px"} flex="2"></Box> */}

          {/* 작은 캘린더 민팅 이후 */}
          <Box borderRadius={"30px"} h="100%" bg="gray.600" ml={"20px"} flex="1">
            <Box>
              {/* #upper box */}
              <Flex direction={"column"} justify={"flex-start"} align={"flex-start"} w={"100%"} h="200px" >
                {/* #1 */}
                <Flex direction={"row"} justify={"flex-start"} align={"flex-start"} w={"100%"}>
                  <IoPersonCircleOutline color="white" size={40} />
                  <Text>buyyourdate</Text>
                  <Button
                    // position={"relative"}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    padding="5px 12px"
                    gap="10px"
                    width="66px"
                    height="30px"
                    background="#FFFFFF"
                    borderRadius="50px"
                    flex="none"
                    order={1}
                    flexGrow={0}
                  >
                    <Image 
                      ml={"5px"}
                      src={emptyHeart}
                      // position={"absolute"}
                    />
                    <Text 
                      mr={"5px"}
                      color={"black"}
                      // position={"absolute"}
                    >
                      42
                    </Text>
                  </Button>
                </Flex>
                <Flex
                  ml={"20px"}
                  mt={"10px"} 
                  fontFamily="Raleway" 
                  fontStyle="normal" 
                  fontWeight={700} 
                  fontSize={["20px", null, "40px"]} 
                  lineHeight={["23px", null, "47px"]} 
                  color="#FFFFFF"
                >
                  My birthday
                </Flex>
                <Flex 
                  ml={"20px"}
                  mt={"70px"} 
                  fontFamily="Raleway" 
                  fontStyle="normal" 
                  fontWeight={400} 
                  fontSize={["20px", null, "24px"]} 
                  lineHeight={["23px", null, "28px"]} 
                  color="#FFFFFF"
                >
                  Date
                </Flex>
                {/* #2 */}
                <Flex>

                </Flex>
                {/* #3 */}
                <Flex 
                  position={"relative"}
                >
                  <Image 
                    src={DescriptionStarLight2} 
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
            
            {/* #below box */}
            <Box 
              background="linear-gradient(180deg, rgba(52, 71, 88, 0.9) 0%, rgba(56, 89, 120, 0) 100%)"
              boxSizing="border-box"
              borderTopLeftRadius="0px"
              borderTopRightRadius="0px"
              borderBottomRightRadius="30px"
              borderBottomLeftRadius="30px"
              w={"100%"} 
              h={"360px"}
            >

              <Flex direction={"column"} justify={"flex-start"} align={"flex-start"}>
                  
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


                

                
              </Flex>
            </Box>
            
          </Box>


          {/* 작은 캘린더 민팅 이전 */}
          <Box direction={"column"} justify={"center"} align={"center"} borderRadius={"30px"} h="100%" bg="white" ml={"20px"} flex="1">
            <Box>
              {/* #1 top box */}
              <Flex mt={"20px"} justify={"space-around"} align={"center"}>
                <Image src={previousMonth}/>
                <Flex
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  fontSize={["20px", null, "25.7447px"]}
                  lineHeight={["23px", null, "39px"]}
                  color="#000000"
                >Date's</Flex>
                <Image src={nextMonth}/>
              </Flex>
              {/* #2 middle box */}
              <Box 
                background="rgba(0, 0, 0, 0)"
                position="relative"
                boxSizing="border-box"
                left="0px"
                top="50px"
                border="1px solid #ADADAD"
                borderRadius="30px"
                w={"300px"} 
                h={"350px"}
              >
              </Box>
              {/* #3 below box */}
              <Box 
                background="linear-gradient(180deg, rgba(52, 71, 88, 0.9) 0%, rgba(56, 89, 120, 0) 100%)"
                position="relative"
                boxSizing="border-box"
                left="0px"
                top="72px"
                border="1px solid #ADADAD"
                borderTopLeftRadius="0px"
                borderTopRightRadius="0px"
                borderBottomRightRadius="30px"
                borderBottomLeftRadius="30px"
                w={"100%"} 
                h={"80px"}
              >

                <Flex direction={"column"} justify={"flex-start"} align={"flex-start"}>
                    
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

                  <Flex 
                    position={"relative"}
                  >
                    <Image 
                      src={DescriptionStarLight2} 
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
                  

                  <Button mt={"5px"} ml={"120px"} w={"120px"} h={"30px"} borderRadius={"20px"} _hover={{ bg: "purple.500" }} >
                  <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                      <Box
                        fontWeight={"500"}
                        color="black"
                        fontStyle={"normal"}
                        fontSize={{ base: "10px", md: "15px" }}
                        lineHeight={"30px"}
                        justifyContent={"flex-end"}
                        alignItems={"flex-end"}
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
        </Flex>
      </Box>
    </>
  );
});

export default Calender;
