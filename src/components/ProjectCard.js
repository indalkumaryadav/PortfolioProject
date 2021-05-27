import { Card, Typography, Button, CardContent } from "@material-ui/core";
import React from "react";
import CardActions from "@material-ui/core/CardActions";

const ProjectCard = ({ image, description }) => {
  return (
    <Card>
      <CardActions>
        <img src={image} style={{ height: 250, width: "100%" }} />
      </CardActions>
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Click</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
