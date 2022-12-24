import { useEffect, useState } from "react";
import { PlatformOptionsType } from "../components/PlatformOptions";

const platformsData = [
  { src: "/images/netflixlogo.png", alt: "netflix" },
  { src: "/images/hbomaxlogo.webp", alt: "hbomax" },
  { src: "/images/primevideologo.png", alt: "primevideo" },
  { src: "/images/disneypluslogo.png", alt: "disneyplus" },
  { src: "/images/starpluslogo.png", alt: "starplus" },
];

export const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<PlatformOptionsType[]>([]);
  useEffect(() => {
    setPlatforms(platformsData);
  }, []);

  const onPlatformSelected = (platform: PlatformOptionsType): void => {
    const newPlatforms = platforms.map((p) => {
      if (p.alt === platform.alt) {
        return { ...p, selected: !p.selected };
      }
      return p;
    });
    setPlatforms(newPlatforms);
  };
  return { platforms, onPlatformSelected };
};
