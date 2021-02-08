import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextInput from "./TextInput/TextInput";



export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextInput label="First name" required id="first-name" autoComplete="given-name" error errorText="You need to write your name yo"/>
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Last name" required id="last-name" autoComplete="family-name" helperText="The last name on your passport"/>
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Adress" id="adress" autoComplete="shipping address-line1" required/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="City" id="city" autoComplete="shipping address-level2" required/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="State/Province/Region" id="state" required/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="Zip / Postal code" id="zip" autoComplete="shipping postal-code" required/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="Country" id="country" autoComplete="shipping country" required/>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
