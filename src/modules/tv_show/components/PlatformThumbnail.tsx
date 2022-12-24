import React from "react";
import { PlatformOptionsType } from "./PlatformOptions";

type PlatformOptionsTypeWithClick = PlatformOptionsType & {
  onClick: (props: PlatformOptionsType) => void;
};

function PlatformThumbnail(props: PlatformOptionsTypeWithClick) {
  return (
    <div className="my-3 h-12 w-12" onClick={() => props.onClick(props)}>
      <img
        className="rounded-full object-cover"
        src={props.src}
        style={
          props.selected
            ? {
                textShadow: "0px 0px 28px rgb(255,0,203)",
                boxShadow: "0px 0px 28px rgb(255,0,203)",
              }
            : {}
        }
        alt={props.alt}
      />
    </div>
  );
}

export default PlatformThumbnail;
