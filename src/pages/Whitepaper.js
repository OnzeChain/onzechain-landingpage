import React from "react";
import OnzechainWhitepaper from "../Assets/PDFs/Onzechain_Whitepaper.pdf";
import { Box } from "@mui/material";

const Whitepaper = () => {
  return (
    <div className="nav-divider">
      <Box width="60%" height="70vh" sx={{ m: "30px auto" }}>
        <h1 style={{textAlign: "center" }}>Onzechain Whitepaper</h1>
        <iframe title="whitepaper" src={OnzechainWhitepaper} width="100%" height="100%" />
      </Box>
    </div>
  );
};

export default Whitepaper;
