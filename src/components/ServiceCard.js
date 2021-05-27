import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const CardDiv = styled(Card)`
  &:hover {
    background-color: #005f99;
    cursor: pointer;
    transition: 0.3s;
    color: white;
  }
`;

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <CardDiv>
      <CardContent>
        <Icon style={{ fontSize: 50 }} />
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardDiv>
  );
};

export default ServiceCard;
