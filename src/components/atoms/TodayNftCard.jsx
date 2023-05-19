import { useEffect, useState } from "react";
import MintedCard from "./MintedCard";
import NotMintedCard from "./NotMintedCard";

export default function TodayNftCard({
  isMinted,
  todayNftUrl,
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
      console.log("MintedImgUrl : ", todayNftUrl);
    } else {
      console.log("Not Minted Yet : ", todayNftUrl);
    }
  }, [todayNftUrl]);
  return (
    <>
      {isMinted ? (
        <MintedCard
          todayNftUrl={todayNftUrl}
          selectedYYYYMMDD={selectedYYYYMMDD}
        />
      ) : (
        <NotMintedCard selectedYYYYMMDD={selectedYYYYMMDD} />
      )}
    </>
  );
}
