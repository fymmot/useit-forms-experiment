import React from 'react';
import { Typography, Link, ThemeProvider } from "@material-ui/core";
import Checkout from "./Checkout";
import theme from "./theme";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Checkout/>
    </ThemeProvider>
  );
}
