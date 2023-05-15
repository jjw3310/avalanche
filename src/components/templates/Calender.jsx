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
} from "@chakra-ui/react";
import { forwardRef } from "react";

const Calender = forwardRef((props, ref) => {
  return (
    <>
      <Box 
        ref={ref} 
        w={"100%"} 
        h={"500px"} 
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
          <Box h="100%" bg="tomato" flex="2">TotalCalender</Box>
          <Box h="100%" bg="white" flex="1">MyCalender</Box>
        </Flex>
      </Box>
    </>
  );
});

export default Calender;
