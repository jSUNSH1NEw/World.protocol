import React from "react";
import { ReactComponent as WRLDIcon } from "./svgs/WRLD-white.svg";


export default function Logo(props) {
  return (
    <div {...props}>
        <WRLDIcon />
    </div>
  );
}