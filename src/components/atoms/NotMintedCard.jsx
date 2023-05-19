import { Box } from "@chakra-ui/react";

export default function NotMintedCard({ todayDateNFT }) {
  return (
    <Box borderRadius={"30px"} h="100%" bg="white" ml={"20px"}>
      <Box
        w="350px"
        position={"relative"}
        // bg={`url(${todayNftImg})`}
        bg={`url(${todayDateNFT})`}
        bgSize={"100%"}
        backgroundBlendMode={"multiply"}
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
      ></Box>
    </Box>
  );
}
