import { useEffect } from "react";
import MintedCard from "./MintedCard";
import NotMintedCard from "./NotMintedCard";

export default function TodayNftCard({ isDefault, todayNftImg }) {
  useEffect(() => {
    console.log("isDefault? : ", isDefault);
    console.log("todayNftImg? : ", todayNftImg);
  }, [isDefault, todayNftImg]);
  return <>{isDefault ? <MintedCard /> : <NotMintedCard />}</>;
}
