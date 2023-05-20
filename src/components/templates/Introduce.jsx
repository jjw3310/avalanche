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
  Button,
} from "@chakra-ui/react";
import { forwardRef } from "react";

import rocket from "@assets/images/rocket.png";
// import { ReactComponent as arrowRight } from "@assets/images/arrowRightSolid.svg";
// import arrow from "@assets/images/arrow.png";
import mainPageClock from "@assets/images/mainPageClock.png";
import { BsArrowRight } from "react-icons/bs"; // react-icons 패키지에서 사용할 화살표 아이콘 가져오기

const Introduce = forwardRef((props, ref) => {
  return (
    <>
      <Box
        ref={ref}
        w={"100%"}
        h={"550px"}
        py={"50px"}
        pl={"5%"}
        pr={"5%"}
        // bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        // paddingBottom={"200px"}
      >
        {/* scrollIntoView용 Box(계속 제목을 가려서 breakpoint 만듬) */}
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          alignItems={"flex-start"}
          justify={"flex-end"}
          px={{ base: "20px", sm: "30px", lg: "50px" }}
          h="100%"
          pt={5}
          pb={5}
        >
          <Box
            borderRadius={"30px"}
            h="100%"
            // bg="tomato"
            mr={"20px"}
            flex="2"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex direction={"row"}>
              <Text
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={{ base: "30px", md: "80px" }}
                lineHeight={"94px"}
                color={"#FFFFFF"}
                mt={"30px"}
                position={"relative"}
                fontFamily="Roboto"
              >
                Own the Moments <br />
                that Matter Most
                <Image
                  width={"200px"}
                  height={"200px"}
                  left={"500px"}
                  bottom={"70px"}
                  src={mainPageClock}
                  position={"absolute"}
                />
              </Text>
            </Flex>
          </Box>

          <Box
            borderRadius={"30px"}
            h="100%"
            ml={"20px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex direction={"column"} justify={"center"}>
              <Text
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={{ base: "10px", md: "24px" }}
                lineHeight={"28px"}
                fontFamily={"Raleway"}
                color={"white"}
                mb={"58px"}
              >
                Create unforgettable experiences on our web3 platform. <br />
                Own and share your most cherished dates with others. <br />
                Join now and make lasting memories. <br />
              </Text>

              <Flex>
                <Image
                  src={rocket}
                  // justifyContent={"center"}
                  // alignItems={"center"}
                  // boxSize={{ sm: "20px", md: "20px" }}
                  boxSize={"20px"}
                />
                <Text
                  fontWeight={"500"}
                  fontFamily={"Raleway"}
                  fontStyle={"normal"}
                  fontSize={{ base: "10px", md: "20px" }}
                  mb={"58px"}
                  ml={"20px"}
                  inline-height={"23px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  color={"white"}
                >
                  Buy Your First Date Today
                </Text>
              </Flex>
              <Button
                w={"190px"}
                borderRadius={"50px"}
                _hover={{ bg: "purple.500" }} // hover 시 배경색 변경
              >
                <Text
                  fontWeight={"700"}
                  fontStyle={"normal"}
                  fontSize={{ base: "10px", md: "20px" }}
                  lineHeight={"23px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  color={"black"}
                  onClick={() => {
                    props.mintDate("2023", 20230519);
                  }}
                >
                  Buy Your Date
                </Text>
                <Box ml={2}>
                  <BsArrowRight size={20} color="black" />
                </Box>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
});

export default Introduce;

// const Introduce = forwardRef((props, ref) => {
//   return (
//     <Box
//       ref={ref}
//       // borderBottom={"solid 1px #C1C1C1"}
//       py={"10px"}
//       bgGradient={"linear(to-l,#8c1eaa,#272842)"}

//     >
//       <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20" m={"80px"} marginBottom={"100px"}>
//         <Box
//           justifyContent={"center"}
//           alignItems={"center"}
//         >
//           <Flex direction={"row"} justify={"space-around"}>
//             <Text
//               fontWeight={"700"}
//               fontStyle={"normal"}
//               fontSize={{ base: "30px", md: "48px" }}
//               lineHeight={"57px"}
//             >
//               Own the Moments <br/>
//               that Matter Most
//             </Text>
//           </Flex>

//         </Box>
//         <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
//           <Flex direction={"column"} justify={"center"}>
//             <Text
//               fontWeight={"400"}
//               fontStyle={"normal"}
//               fontSize={{ base: "10px", md: "20px" }}
//               lineHeight={"28px"}
//               font-weight={"400"}
//               // position: absolute;
//               font-family={"Raleway"}
//               color={"FFFFFF"}
//             >
//               Create unforgettable experiences on our web3 platform.  <br/>
//               Own and share your most cherished dates with others.  <br/>
//               Join now and make lasting memories.  <br/>
//             </Text>
//             <Flex>
//               <Image src={rocket} justifyContent={"center"} alignItems={"center"} boxSize={{ sm: "15px", md: "15px" }} />
//               <Text
//                 fontWeight={"500"}
//                 fontStyle={"normal"}
//                 fontSize={{ base: "10px", md: "15px" }}
//                 lineHeight={"30px"}
//               >
//                 Buy Your First Date Today
//               </Text>
//             </Flex>
//             <Button
//               w={"150px"}
//               borderRadius={"50px"}
//             >
//               <Text
//                 fontWeight={"500"}
//                 fontStyle={"normal"}
//                 fontSize={{ base: "10px", md: "15px" }}
//                 lineHeight={"30px"}
//               >
//                 Buy Your Date
//               </Text>
//               <Image src={arrowIcon} />
//             </Button>
//           </Flex>
//         </Box>

//       </SimpleGrid>
//     </Box>
//   );
// });

// export default Introduce;
