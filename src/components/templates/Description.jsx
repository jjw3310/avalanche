import React from "react";
import { forwardRef } from "react";
import {
  Box,
  Flex,
  chakra,
  Text,
  SimpleGrid,
  Image,
  UnorderedList,
} from "@chakra-ui/react";
// import mento1 from "@assets/images/mento1.png";
// import mento2 from "@assets/images/mento2.png";
// import mento3 from "@assets/images/mento3.png";
import DescriptionStarLight2 from "@assets/images/DescriptionStarLight2.png";
import logoCalendar from "@assets/images/logoCalendar.png";
import palateIcon from "@assets/images/palateIcon.png";
import logoPeople from "@assets/images/logoPeople.png";

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
          mt={"200px"}
          fontWeight={"700"}
          fontStyle={"normal"}
          fontSize={"40px"}
          lineHeight={"82px"}
          font-family="Raleway"
          color={"#FFFFFF"}
          mb={"100px"}
        >
          What You Can Do with Date’s
        </chakra.h1>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 20, md: 20, lg: 10 }}
        >

          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Image 
              src={logoCalendar}
              // position="relative"
              width="50px"
              height="50px"
              left="100px"
              bottom="-80px"
            />
              <Text
                mt={"100px"}
                ml={"70px"}
                fontFamily={"Raleway"}
                fontStyle={"normal"}
                fontWeight={"700"}
                fontSize={"30px"}
                lineHeight={"38px"}
                color={"#FFFFFF"}
                position={"relative"}
              >
              <Image 
                src={DescriptionStarLight2} 
                position={"absolute"}
                width={"100px"}
                height={"100px"}
                left={"-70px"}
                bottom={"-30px"}
              />
              Connect and celebrate
            </Text>
            <UnorderedList
              mt={"30px"}
              fontFamily={"Raleway"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"23px"}
              color={"#FFFFFF"}
            >
              <Text>
              Join our social platform to connect, <br/>
              share experiences, and celebrate together. <br/>
              See other people's special dates, <br/>
              leave comments, and mingle with others. <br/>
              </Text>
            </UnorderedList>
          </Flex>








          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Image  
              src={palateIcon}
              // position="relative"
              width="50px"
              height="50px"
              left="100px"
              bottom="-80px"
            />
            <Text
              mt={"100px"}
              ml={"40px"}
              fontFamily={"Raleway"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"30px"}
              lineHeight={"38px"}
              color={"#FFFFFF"}
              position={"relative"}
            >
              <Image 
                src={DescriptionStarLight2} 
                position={"absolute"}
                width={"100px"}
                height={"100px"}
                left={"-70px"}
                bottom={"-30px"}
              />
              Personalize your date
            </Text>
            <UnorderedList
              mt={"30px"}
              fontFamily={"Raleway"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"23px"}
              color={"#FFFFFF"}
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
            <Image  
              src={logoPeople}
              // position="relative"
              width="50px"
              height="50px"
              left="100px"
              bottom="-80px"
            />
            <Text
              mt={"100px"}
              ml={"70px"}
              fontFamily={"Raleway"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"30px"}
              lineHeight={"38px"}
              color={"#FFFFFF"}
              position={"relative"}
            >
              <Image 
                src={DescriptionStarLight2} 
                position={"absolute"}
                width={"100px"}
                height={"100px"}
                left={"-70px"}
                bottom={"-30px"}
              />
              Showcase your own NFT
            </Text>
            <UnorderedList
              mt={"30px"}
              fontFamily={"Raleway"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"23px"}
              color={"#FFFFFF"}
            >
              <Text>
              Add branding elements like a logo, tagline, <br/>
              or message to create a unique personal brand. <br/> 
              Showcase your NFTs to promote yourself <br/> 
              in a creative and memorable way. <br/>       
              </Text>
            </UnorderedList>
          </Flex>

        </SimpleGrid>
      </Flex>
    </Box>
  );
});

export default Description;
