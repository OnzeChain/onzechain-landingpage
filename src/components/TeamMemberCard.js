import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const TeamMemberCard = ({ name, role, imageURL }) => {
  return (
    <Card sx={{ width: 300, height: 350, marginY: "30px", backgroundColor: "orange", borderRadius: "30px" }}>
      <CardContent>
        <img
          src={imageURL}
          width="200px"
          style={{ borderRadius: "50%", marginTop: "20px" }}
          alt="member of team"
        />
        <Typography
          sx={{ fontSize: 26, mt: "20px" }}
          color="white"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="white" gutterBottom>
          {role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
