import React from "react";
import NavBar from "../components/NavBar";
import Service from "../components/Service";
import Project from "../components/Project";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import SVG from "../images/image.svg";
import Contact from "../components/Contact";
import About from "../components/About";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconButton, Paper } from "@material-ui/core";
import Typed from "react-typed";
import { Helmet } from "react-helmet";
import * as Scroll from "react-scroll";
let Link = Scroll.Link;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />

      <Container>
        {/*  */}
        <Grid container spacing={3} style={{ marginTop: 10 }}>
          <Grid item md={6}>
            <Typed
              style={{ fontSize: 45 }}
              strings={["Hi I am Indal Yadav"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
            <Typography style={{ fontSize: 16 }}>
              Hi there. Thanks for visiting my portfolio. I am Indal Yadav, I am
              interested in creating something new using the latest
              technologies. I always like to learn new technology and spreading
              out knowledge among others.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: 50,
              }}
            >
              <Button
                style={{
                  backgroundColor: "red",
                  width: 150,
                  textTransform: "capitalize",
                }}
              >
                <a
                  target="_blank"
                  href="https://github.com/indalkumaryadav"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  GitHub
                </a>
              </Button>
            </div>
          </Grid>
          <Grid item md={6}>
            <img src={SVG} style={{ width: "100%" }} />
          </Grid>
        </Grid>
        {/*  */}
        <About />
        <Service />
        <Project />
        <Contact />
        {/* footer */}
        <Paper
          elevation={0}
          style={{
            marginTop: 10,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <TwitterIcon style={{ color: "blue" }} />
          </IconButton>
          <IconButton>
            <YouTubeIcon style={{ color: "red" }} />
          </IconButton>
          <IconButton>
            <FacebookIcon style={{ color: "blue" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon style={{ color: "blue" }} />
          </IconButton>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
