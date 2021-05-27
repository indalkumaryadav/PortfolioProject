import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ServiceCard from "./ServiceCard";
import { skills } from "./data";

const Service = () => {
  return (
    <>
      <Typography variant="h4">Service</Typography>
      <Grid container spacing={2} style={{ marginTop: 10, marginBottom: 10 }}>
        {skills?.map((item) => {
          return (
            <Grid item md={3}>
              <ServiceCard
                Icon={item.Icon}
                title={item.title}
                description={item.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Service;
