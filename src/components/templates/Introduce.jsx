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
import arrowIcon from "@assets/images/arrowIcon.png";

const Introduce = forwardRef((props, ref) => {
  return (
    <>
      <Box 
        ref={ref} 
        w={"100%"} 
        h={"600px"} 
        py={"50px"} 
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
        <Box 
          borderRadius={"30px"} 
          h="100%" 
          // bg="tomato" 
          mr={"20px"} 
          flex="2"
          justifyContent={"center"} 
          alignItems={"center"} 
        >
          <Flex direction={"row"} justify={"space-around"}>
            <Text
              fontWeight={"700"}
              fontStyle={"normal"}
              fontSize={{ base: "30px", md: "48px" }}
              lineHeight={"57px"}
              color={"white"}
              mt={"100px"}
            >
              Own the Moments <br/>
              that Matter Most
            </Text>
          </Flex>
        </Box>
        
        <Box 
          borderRadius={"30px"} 
          h="100%" 
          // bg="white" 
          ml={"20px"} 
          flex="1"
          display={"flex"} 
          justifyContent={"center"} 
          alignItems={"center"}
        >
          <Flex direction={"column"} justify={"center"}>
            <Text
              fontWeight={"400"}
              fontStyle={"normal"}
              fontSize={{ base: "10px", md: "15px" }}
              lineHeight={"28px"}
              font-weight={"400"}
              // position: absolute;
              font-family={"Raleway"}
              color={"FFFFFF"}
              mb={"58px"}
            >
              Create unforgettable experiences on our web3 platform.  <br/>
              Own and share your most cherished dates with others.  <br/>
              Join now and make lasting memories.  <br/>
            </Text>

            <Flex>
              <Image 
                src={rocket} 
                // justifyContent={"center"} 
                // alignItems={"center"} 
                boxSize={{ sm: "20px", md: "20px" }} 
              />
              <Text
                fontWeight={"500"}
                fontStyle={"normal"}
                fontSize={{ base: "10px", md: "15px" }}
                // lineHeight={"30px"}
                mb={"58px"}
                ml={"10px"}
                justifyContent={"center"} 
                alignItems={"center"}
              >
                Buy Your First Date Today
              </Text>  
            </Flex>

            <Button
              w={"150px"}
              borderRadius={"50px"}
            >
              <Text
                fontWeight={"500"}
                fontStyle={"normal"}
                fontSize={{ base: "10px", md: "15px" }}
                lineHeight={"30px"}
                justifyContent={"center"} 
                alignItems={"center"}
              >
                Buy Your Date
              </Text>
              <Image src={arrowIcon} />
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
