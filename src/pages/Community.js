import React from "react";
import {Grid, Button, Container} from "@mui/material"
import { FaDiscord, FaArrowRight, FaReddit, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Community = () => {

    const StyledButton = ({button}) => {
        return(
                <Button sx={{ borderRadius: '16px', backgroundColor: 'orange' }} variant="contained" color="warning" href={button.url} fullWidth>
                    <Grid container>
                        <Grid color="white" item xs={11}>           
                            {button.icon}  {button.name}
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
                'description': 'Ask questions and engage with the OnzeChain community.',
                'icon': <FaDiscord/>
            },
            {
                'name': 'Reddit',
                'url': 'https://reddit.com/',
                'description': 'Contribute to wide-ranging OnzeChain discussions',
                'icon': <FaReddit/>
            },
            {
                'name': 'Twitter',
                'url': 'https://twitter.com/',
                'description': 'Follow the latest news from OnzeChain',
                'icon': <FaTwitter/>
            },
            {
                'name': 'Forum',
                'url': 'https://twitter.com/',
                'description': 'Contribute to wide-ranging OnzeChain discussions',
                'icon': <FaTwitter/>
            },
            {
                'name': 'Github',
                'url': 'https://github.com/OnzeChain',
                'description': 'Check our repositories on Github!',
                'icon': <FaGithub/>
            },
            {
                'name': 'Instagram',
                'url': 'https://instagram.com',
                'description': 'Follow the latest news from OnzeChain',
                'icon': <FaInstagram/>
            },

        ]
        return(
       <Grid key={2} container spacing={2}>
          <Grid sx={{ color: "darkorange" }} item xs={12}>
            Join the Conversation.
          </Grid>

        {buttons.map((button) => (
          <Grid item xs={6}>
            <StyledButton fullWidth button={button} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div className="nav-divider">
      <Container>
        <Grid key={3} container spacing={2}>
          <Grid key={1} container spacing={2}>
            <Grid item xs={12}>
              <h3>Community</h3>
            </Grid>
            <Grid sx={{ color: "orange" }} item xs={12}>
              The OnzeChain community is an ecosystem of users, developers,
              designers, and educators
            </Grid>
            <br />
          </Grid>
          <hr />
          <Buttons />
          <hr />
        </Grid>
      </Container>
    </div>
  );
};

export default Community;
