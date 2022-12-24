import React from "react";
import { usePlatforms } from "../hooks/usePlatforms";
import PlatformThumbnail from "./PlatformThumbnail";

export type PlatformOptionsType = {
  src: string;
  alt: string;
  selected?: boolean;
};

function PlatformOptions() {
  const { platforms, onPlatformSelected } = usePlatforms();
  return (
    <div className="my-4 flex flex-row justify-evenly">
      {platforms.map((platform) => {
        return <PlatformThumbnail key={platform.alt} {...platform} onClick={onPlatformSelected} />;
      })}
    </div>
  );
}

export default PlatformOptions;
