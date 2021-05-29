import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ServiceCard from "./ServiceCard";
import { skills } from "./data";

const Service = () => {
  return (
    <>
      <div className="Service">
        <Typography variant="h4">Service</Typography>
        <Grid container spacing={2} style={{ marginTop: 10, marginBottom: 10 }}>
          {skills?.map((item, i) => {
            return (
              <Grid item md={3} key={i}>
                <ServiceCard
                  Icon={item.Icon}
                  image={item.img}
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Service;
