import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "../assets/background.svg";

const Background = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "35px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top bottom",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: 2,
      }}
    ></Box>
  );
};

export default Background;
