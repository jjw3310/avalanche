import {
  Box,
  SimpleGrid,
  Flex,
  chakra,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import { forwardRef } from "react";
// import jiminNFT from "@assets/images/jimin.png";
// import BasicNFT from "@assets/images/BasicLion.png";

const Calender = forwardRef((props, ref) => {
  return (
    <Box 
      ref={ref} 
      // borderBottom={"solid 1px #C1C1C1"} 
      py={"10px"} 
      bgGradient={"linear(to-l,#8c1eaa,#272842)"}
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20" m={"40px"} marginBottom={"200px"}>
        <Box 
          display={"flex"} 
          justifyContent={"center"} 
          alignItems={"center"} 
          background="tomato"
        >
          <Flex direction={"column"} justify={"center"}>
            <Box
              pw={"800px"}
              py={"200px"} 
            >
            TotalCalender 
            </Box>
          </Flex>
        </Box>

        <Box 
          display={"flex"} 
          justifyContent={"center"} 
          alignItems={"center"} 
          pw={"200px"}
          py={"200px"} 
          background="tomato"
        >
          <Flex direction={"column"} justify={"center"}>
            <Box
              
            >
            MyCalender  
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
});

export default Calender;
