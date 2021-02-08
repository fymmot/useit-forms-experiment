import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles, Typography, TextField, InputAdornment } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Done from "@material-ui/icons/Done"


const TextInput = (props) => {
  const { label, id, required, autoComplete, helperText, errorText, value, setValue } = props;

  const [errorState, setErrorState] = useState(false);
  const [successState, setSuccessState] = useState(false);


  const useStyles = makeStyles((theme) => ({
    label: {
      fontWeight: 500,
      marginBottom: "0.2rem",
      color: errorState && theme.palette.error.main
    },
    error: {
      marginTop: "-0.2rem",
      marginBottom: "0.4rem",
      color: theme.palette.error.main,
    }
  }));
  const classes = useStyles();

  const onChange = (e) => {
    setValue(e.target.value);
    if (value?.length>0)
      setErrorState(false);
  };

  const onBlur = () => {
    if (value?.length > 0){
      setErrorState(false);
      setSuccessState(true);
      return;
    }
    setErrorState(true);
    setSuccessState(false);
  }

  const getIcon = () => {
    if (errorState) {
      return (<InputAdornment position="end">
        <ErrorIcon color="error" />
      </InputAdornment>)
    }
    if (successState) {
      return (<InputAdornment position="end">
        <Done color="primary" />
      </InputAdornment>)
    }
  }



  return <>
    <Typography variant="body1" className={classes.label} >
      <label htmlFor={id}>{label}</label>
    </Typography>
    <TextField
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={errorState}
      variant="outlined"
      inputProps={{"aria-required": required}}
      id={id}
      name={id}
      fullWidth
      autoComplete={autoComplete}
      helperText={errorState && errorText ? errorText : helperText}
      InputProps={{
        endAdornment: getIcon()
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
  errorText: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default TextInput;