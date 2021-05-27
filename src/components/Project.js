import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

const Project = () => {
  return (
    <>
      <div style={{ marginTop: 10 }}>
        <Typography variant="h4">Project</Typography>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          {projects.map((item) => {
            return (
              <Grid item md={3}>
                <ProjectCard
                  image={item.image}
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

export default Project;
