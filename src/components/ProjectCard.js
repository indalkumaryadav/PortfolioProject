import { Card, Typography, Button, CardContent } from "@material-ui/core";
import React from "react";
import CardActions from "@material-ui/core/CardActions";

const ProjectCard = ({ image, description, sourceCodeLink, demo }) => {
  return (
    <Card>
      <CardActions>
        <img src={image} style={{ height: 250, width: "100%" }} />
      </CardActions>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            style={{
              textTransform: "capitalize",
              fontSize: 16,
            }}
          >
            <a
              target="_blank"
              href={sourceCodeLink}
              style={{ textDecoration: "none" }}
            >
              Git Hub
            </a>
          </Button>
          <Button
            style={{
              textTransform: "capitalize",
              fontSize: 16,
            }}
          >
            <a target="_blank" href={demo} style={{ textDecoration: "none" }}>
              Demo
            </a>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
