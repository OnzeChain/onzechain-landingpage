import React from "react";
import {Grid, Button} from "@mui/material"
import "../style/style.css";
import { FaDiscord, FaArrowRight } from "react-icons/fa";


function faq(props) {
  return (
    <div className="nav-divider">
        <Grid container spacing={2}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={6}>
        <h1>Frequently Asked Questions</h1>
        <div className="faq">
            <h2>What is OnzeChain?</h2>  
            <p>OnzeChain is a protocol for providing liquidity and trading tokens on the Polygon blockchain.</p>
            <hr/>
            <h2>What is the transaction fee?</h2>  
            <p>We wield a 0,1% transaction fee.</p>
            <hr/>
            <h2>Which wallets are supported?</h2>
            <p>Any Web3 Wallet, like MetaMask & TrustWallet for example.</p>
            <hr/>
            <h2>How do I swap tokens and provide liquidity?</h2>
            <p>Head over to the OnzeChain interface and connect any Web3 wallet. Every transaction on Polygon costs MATIC.</p>
        </div>
        </Grid>
        <Grid item xs={5}>
        <Button 
        startIcon={<FaDiscord />}
        endIcon={<FaArrowRight />}
        className="discord-button"
        href="https://discord.com/" 
        variant="contained"
        >Discord</Button>
        </Grid>
        </Grid>

    </div>
  );
}

export default faq;
