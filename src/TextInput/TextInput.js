import React from "react";
import PropTypes from "prop-types";
import {makeStyles, Typography, TextField, InputAdornment } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";


const TextInput = (props) => {
  const { label, id, required, autoComplete, helperText, error, errorText } = props;

  const useStyles = makeStyles((theme) => ({
    label: {
      fontWeight: 500,
      marginBottom: "0.2rem"
    },
    error: {
      marginTop: "-0.2rem",
      marginBottom: "0.4rem",
      color: theme.palette.error.main,
    }
  }));
  const classes = useStyles();


  return <>
    <Typography variant="body1" className={classes.label} >
      <label htmlFor={id}>{label}</label>
    </Typography>
    {error && errorText && (
      <Typography variant="body2" className={classes.error}>
        {errorText}
      </Typography>
    )}
    <TextField
      error={error}
      variant="outlined"
      inputProps={{"aria-required": required}}
      id={id}
      name={id}
      fullWidth
      autoComplete={autoComplete}
      helperText={!error && helperText}
      InputProps={{
        endAdornment: error && (
          <InputAdornment position="end">
            <ErrorIcon color="error" />
          </InputAdornment>
        ),
      }}
    />
  </>
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string
};

export default TextInput;