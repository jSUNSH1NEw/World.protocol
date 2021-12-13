import React from "react";
import { Box } from "@chakra-ui/react";
import { ReactComponent as WRLDIcon } from "../assets/icon/WRLD-white.svg";


export default function Logo(props) {
  return (
    <Box {...props}>
        <WRLDIcon />
    </Box>
  );
}