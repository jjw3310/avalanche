import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function NotMintedCard({ todayNftImg }) {
  const [imgSrc, setImgSrc] = useState();
  useEffect(() => {
    if (todayNftImg) {
      setImgSrc(todayNftImg);
      console.log("imgSrc : ", imgSrc);
    }
  }, [todayNftImg]);
  return (
    <Box borderRadius={"30px"} h="100%" bg="white" ml={"20px"}>
      <Box
        w="350px"
        position={"relative"}
        bg={`url(${todayNftImg})`}
        bgSize={"100%"}
      >
        <Image src={`url(${imgSrc})`} />
      </Box>
    </Box>
  );
}
