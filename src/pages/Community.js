import React from "react";
import {Grid, Button, Container, Paper} from "@mui/material"
import "../style/style.css";
import { FaDiscord, FaArrowRight } from "react-icons/fa";
import { styled } from '@mui/material/styles';


const Community = () => {

    const StyledButton = ({button}) => {
        console.log(button)
        return(
                <Button sx={{ borderRadius: '16px' }} href={button.url} fullWidth>
                    <Grid container>
                        <Grid color="white" item xs={11}>           
                            <FaDiscord /> {button.name}
                        </Grid>
                        <Grid justifyContent='flex-end' color="white" item xs={1}>           
                            <FaArrowRight />
                        </Grid>
                        <Grid color="white" item xs={12}>           
                            {button.description}
                        </Grid>
                    </Grid>  
                </Button>
        )
    }

    const Buttons = () => {
        const buttons = [
            {
                'name': 'Discord',
                'url': 'https://discord.com/',
                'description': 'Ask questions and engage with the OnzeChain community.'
            },
            {
                'name': 'Reddit',
                'url': 'https://reddit.com/',
                'description': 'Contribute to wide-ranging OnzeChain discussions'
            },
            {
                'name': 'Twitter',
                'url': 'https://twitter.com/',
                'description': 'Follow the latest news from OnzeChain'
            },
            {
                'name': 'Forum',
                'url': 'https://twitter.com/',
                'description': 'Contribute to wide-ranging OnzeChain discussions'
            },
            {
                'name': 'Github',
                'url': 'https://github.com/OnzeChain',
                'description': 'Check our repositories on Github!'
            },
            {
                'name': 'Instagram',
                'url': 'https://instagram.com',
                'description': 'Follow the latest news from OnzeChain'
            },

        ]
        return(
            <Grid key={2} container spacing={2}>

                <Grid item xs={12}>
                    Join the Conversation.
                </Grid>

                {buttons.map((button) => (
                    <Grid item xs={6}>
                        <StyledButton fullWidth button={button}/>
                    </Grid>
                ))}
                    
            </Grid>
        )
    }

  return (
    <div className="nav-divider">
        <Container>
            <Grid key={3} container spacing={2}>
                
                <Grid key={1} container spacing={2}>
                    <Grid item xs={12}>
                        <h3>Community</h3>
                    </Grid>
                    <Grid item xs={12}>
                        The OnzeChain community is an ecosystem of users, developers, designers, and educators
                    </Grid>
                    <br/>
                </Grid>
                <hr/>
                <Buttons/>
                <hr/>
            </Grid>
        </Container>
    </div>
  );
}

export default Community;
