import React from "react";
import "../style/home.css";
import { Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  document.title = Route.title = "OnzeChain";
  return (
      <Box sx={{maxHeight: "100vh", overflow: "hidden"}}>
          <span className="fimg">
            <img
              className="fruitimg"
              src="https://i.postimg.cc/KjDP5G5Z/Grey-Scale.png"
              alt="Auto"
            />
          </span>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <div class="centered">
                <h1 className="title">
                  OnzeChain <span className="prot">PROTOCOL</span>
                </h1>
                <h2 className="txt">Swap every token, everywhere</h2>
                <div className="list">
                  <li>Swap tokens</li>
                  <li>Buy, sell and trade NFT's</li>
                  <li>Provide liquidity</li>
                  <li>Earn passive income</li>
                  <div className="stack">
                    <Stack direction="row" spacing={2}>
                      <TwitterIcon style={{ color: "black" }} />
                      <FacebookIcon style={{ color: "black" }} />
                      <InstagramIcon style={{ color: "black" }} />
                      <GitHubIcon style={{ color: "black" }} />
                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
      </Box>
  );
};

export default Home;
