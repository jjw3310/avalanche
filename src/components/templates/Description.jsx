import React from "react";
import { forwardRef } from "react";
import {
  Box,
  Flex,
  chakra,
  Text,
  SimpleGrid,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
// import mento1 from "@assets/images/mento1.png";
// import mento2 from "@assets/images/mento2.png";
// import mento3 from "@assets/images/mento3.png";

const Description = forwardRef((props, ref) => {
  return (
    <Box 
      ref={ref} 
      py={"70px"}
      bgGradient={"linear(to-l,#8c1eaa,#272842)"}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        marginBottom={"100px"}
      >
        <chakra.h1
          textAlign={"center"}
          py={10}
          fontWeight={"700"}
          fontStyle={"normal"}
          fontSize={"48px"}
          lineHeight={"57px"}
        >
          What You Can Do with Date’s
        </chakra.h1>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 20, md: 20, lg: 20 }}
        >


          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text
              mt={"100px"}
              fontFamily={"IBMPlexSansKR-Regular"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"24px"}
              lineHeight={"31px"}
            >
              Showcase your own NFT
            </Text>
            <UnorderedList
              mt={"30px"}
              fontFamily={"IBMPlexSansKR-Regular"}
              fontWeight={"700"}
              fontSize={"14px"}
              lineHeight={"18px"}
            >
              <Text>
              Create a unique memory by personalizing  <br/>
              your special date with NFT pictures.  <br/>
              Share a one-of-a-kind experience with others. <br/> 
              <br/> 
              </Text>
            </UnorderedList>
          </Flex>






          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text
              mt={"100px"}
              fontFamily={"IBMPlexSansKR-Regular"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"24px"}
              lineHeight={"31px"}
            >
              Showcase your own NFT
            </Text>
            <UnorderedList
              mt={"30px"}
              fontFamily={"IBMPlexSansKR-Regular"}
              fontWeight={"700"}
              fontSize={"14px"}
              lineHeight={"18px"}
            >
              <Text>
              Add branding elements like a logo, tagline, <br/>
              or message to create a unique personal brand. <br/> 
              Showcase your NFTs to promote yourself <br/> 
              in a creative and memorable way. <br/>       
              </Text>
            </UnorderedList>
          </Flex>





          
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text
              mt={"100px"}
              fontFamily={"IBMPlexSansKR-Regular"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"24px"}
              lineHeight={"31px"}
            >
              Connect and celebrate
            </Text>
            <UnorderedList
              mt={"30px"}
              fontFamily={"IBMPlexSansKR-Regular"}
              fontWeight={"700"}
              fontSize={"14px"}
              lineHeight={"18px"}
            >
              <Text>
              Join our social platform to connect, <br/>
              share experiences, and celebrate together. <br/>
              See other people's special dates, <br/>
              leave comments, and mingle with others. <br/>
              </Text>
            </UnorderedList>
          </Flex>




        </SimpleGrid>
      </Flex>
    </Box>
  );
});

export default Description;
