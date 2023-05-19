import { useEffect } from "react";
import MintedCard from "./MintedCard";
import NotMintedCard from "./NotMintedCard";

export default function TodayNftCard({
  isMinted,
  todayNftImg,
  selectedYYYYMMDD,
}) {
  useEffect(() => {
    if (isMinted) {
      console.log("MintedImgUrl : ", todayNftImg);
    } else {
      console.log("Not Minted Yet : ", todayNftImg);
    }
  }, [todayNftImg]);
  return (
    <>
      {isMinted ? (
        <MintedCard
          todayNftImg={todayNftImg}
          selectedYYYYMMDD={selectedYYYYMMDD}
        />
      ) : (
        <NotMintedCard todayNftImg={todayNftImg} />
      )}
    </>
  );
}
