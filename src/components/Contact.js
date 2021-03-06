import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import ContactSVG from "../images/contact.svg";

const Contact = () => {
  const onSubmit = (data) => {
    window.Email.send({
      SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
      To: data.email,
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body" + data.firstname,
    });
  };
  return (
    <Paper style={{ marginTop: 20 }} className="Contact">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Container
            style={{ marginTop: 10, display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h4">Contact Me</Typography>
          </Container>
          <img
            style={{ marginTop: 20, width: "100%", height: 350, padding: 8 }}
            src={ContactSVG}
          />
        </Grid>
        <Grid item md={6}>
          <form style={{ padding: 8 }} onSubmit={onSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Full Name"
            />
            <TextField
              fullWidth
              type="email"
              variant="outlined"
              margin="normal"
              label="Email"
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Message"
              multiline
              rows={5}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button
                style={{
                  width: 250,
                  height: 45,
                  backgroundColor: "red",
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;
