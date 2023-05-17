import {
  Box,
  // SimpleGrid,
  Flex,
  // chakra,
  // Text,
  // Image,
  // Stack,
  // Heading,
  // VStack,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import NavBar from "@components/templates/NavBar";

const PurchaseDetail = forwardRef((props, ref) => {
  return (
    <>
      <NavBar/>
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
          <Box borderRadius={"30px"} h="100%" bg="white" mr={"20px"} flex="2"></Box>
          <Box borderRadius={"30px"} h="100%" bg="white" ml={"20px"} flex="1"></Box>
        </Flex>
      </Box>
    </>
  );
});

export default PurchaseDetail;
