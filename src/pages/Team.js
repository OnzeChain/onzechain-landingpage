import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import TeamMemberCard from "../components/TeamMemberCard";
import TinStay from "../Assets/images/tinstay.png";
import Sem from "../Assets/images/sem.png";
import Dirk from "../Assets/images/dirk.png";
import Jovi from "../Assets/images/jovi.jpg";
import Fabian from "../Assets/images/fabian.png";

const Team = () => {
  const teamMembersFirstRow = [
    {
      name: "Martin Staykov",
      role: "Front-end developer",
      imageURL: TinStay,
    },
    {
      name: "Sem de Wilde",
      role: "Back-end developer",
      imageURL: Sem,
    },
    {
      name: "Fabian Ifionu",
      role: "Product Owner",
      imageURL: Fabian,
    },
  ];

  const teamMembersSecondRow = [
    {
      name: "Jovi Simons",
      role: "Back-end developer",
      imageURL: Jovi,
    },
    {
      name: "Dirk Lemmen",
      role: "Back-end developer",
      imageURL: Dirk,
    },
  ];

  return (
    <Container sx={{ textAlign: "center" }}>
      <div className="nav-divider">
        <Typography color="orange" variant="h3">
          Our Team
        </Typography>
        <Grid container rowSpacing={0}>
          {teamMembersFirstRow &&
            teamMembersFirstRow.map((member) => (
              <Grid item xs={4}>
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  imageURL={member.imageURL}
                />
              </Grid>
            ))}
        </Grid>

        <Grid container direction="row" justifyContent="center" rowSpacing={0}>
          {teamMembersSecondRow &&
            teamMembersSecondRow.map((member) => (
              <Grid item xs={4}>
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  imageURL={member.imageURL}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Team;
