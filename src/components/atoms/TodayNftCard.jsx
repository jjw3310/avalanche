import { useEffect, useState } from "react";
import MintedCard from "./MintedCard";
import NotMintedCard from "./NotMintedCard";

export default function TodayNftCard({
  isMinted,
  todayNftInfo,
  selectedYYYYMMDD,
}) {
  const [minted, setIsMinted] = useState();
  const [nftImg, setNftImg] = useState();
  const [yyyymmdd, setSelectedYYYYMMDD] = useState();

  useEffect(() => {
    if (isMinted) setIsMinted(isMinted);
    if (selectedYYYYMMDD) setSelectedYYYYMMDD(selectedYYYYMMDD);
  }, [isMinted, selectedYYYYMMDD]);

  useEffect(() => {
    if (isMinted) {
      console.log("MintedImgUrl : ", todayNftInfo.imgUrl);
    } else {
      console.log("Not Minted Yet : ", todayNftInfo);
    }
  }, [todayNftInfo]);
  return (
    <>
      {isMinted ? (
        <MintedCard
          todayNftInfo={todayNftInfo}
          selectedYYYYMMDD={selectedYYYYMMDD}
        />
      ) : (
        <NotMintedCard selectedYYYYMMDD={selectedYYYYMMDD} />
      )}
    </>
  );
}
