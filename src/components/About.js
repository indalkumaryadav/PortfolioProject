import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import AvatarSVG from "../images/avatar.svg";

const About = () => {
  return (
    <Grid
      container
      style={{ marginTop: 10, marginBottom: 10 }}
      spacing={3}
      className="About"
    >
      <Grid item md={6}>
        <IconButton>
          <Avatar
            src="https://avatars.githubusercontent.com/u/73450527?v=4"
            style={{ width: "300px", height: 300 }}
          />
        </IconButton>
      </Grid>
      <Grid item md={6}>
        <div style={{ marginTop: 40 }}>
          <Typography variant="h4">About Me</Typography>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <Typography style={{ fontSize: 16 }}>
              A freelance product designer specialised in develop products like
              websites,web and mobile application and much more.
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
