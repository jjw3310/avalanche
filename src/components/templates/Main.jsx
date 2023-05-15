import { Box, Image, Flex, Button, Text } from "@chakra-ui/react";
import "@assets/css/Main.css";
// import AslanNFTMain from "@assets/images/AslanNFTMain.png";
import { forwardRef } from "react";

const Main = forwardRef((props, ref) => {
  return (
    <>
      <Box
        // w={"25%"}
        // h={"25%"}
        bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        // pos={"absolute"}
        // zIndex={-3}
        textAlign={"center"}
        py={10}
        fontWeight={"700"}
        fontStyle={"normal"}
        fontSize={"48px"}
        lineHeight={"57px"}
        direction={"column"}
        align={"center"} 
        justify={"center"}
        py={"150px"}
        gap={"50px"}
        ref={ref}
      >
        <Text>
          The project that inspired the<br/> 
          modern CryptoArt movement
        </Text>
      </Box>
      <Box
        bgGradient={"linear(to-l,#8c1eaa,#272842)"}
        textAlign={"center"}
        fontWeight={"700"}
        fontStyle={"normal"}
        fontSize={"20px"}
        lineHeight={"30px"}
        direction={"column"}
        align={"center"} 
        justify={"center"}
        gap={"50px"}
        ref={ref}
        paddingBottom={"200px"}
      >
        <Text>
          10,000 unique collectible characters with proof of<br/> 
          ownership stored on the Ethereum blockchain.
        </Text>
      </Box>
    </>
  );
});

export default Main;
