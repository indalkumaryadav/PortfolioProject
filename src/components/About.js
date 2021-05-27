import { Grid, Typography } from "@material-ui/core";
import React from "react";
import AvatarSVG from "../images/avatar.svg";

const About = () => {
  return (
    <Grid container style={{ marginTop: 10, marginBottom: 10 }} spacing={3}>
      <Grid item md={6}>
        <img src={AvatarSVG} style={{ width: "100%", height: 300 }} />
      </Grid>
      <Grid item md={6}>
        <div style={{ marginTop: 40 }}>
          <Typography variant="h4">About Me</Typography>
          <Typography>
            About Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            facilis eius beatae molestias repellat ipsa necessitatibus
            aspernatur unde. Molestiae cupiditate, et atque alias dolorem
            quaerat voluptas blanditiis eveniet eos adipisci rerum praesentium!
            Dolores aut perspiciatis harum sequi labore tempore a alias corporis
            facere quisquam, excepturi quae, quam quasi quibusdam soluta. About
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            facilis eius beatae molestias repellat ipsa necessitatibus
            aspernatur unde. Molestiae cupiditate, et atque alias dolorem
            quaerat voluptas blanditiis eveniet eos adipisci rerum praesentium!
            Dolores aut perspiciatis harum sequi labore tempore a alias corporis
            facere quisquam, excepturi quae, quam quasi quibusdam soluta.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
