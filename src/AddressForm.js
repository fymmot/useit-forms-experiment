import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextInput from "./TextInput/TextInput";


export default function AddressForm() {

  const [firstNameState, setFirstNameState] = useState("Tommy");
  const [lastNameState, setLastNameState] = useState("");
  const [addressState, setAddressState] = useState("");
  const [cityState, setCityState] = useState("");
  const [stateState, setStateState] = useState("");
  const [zipState, setZipState] = useState("");
  const [countryState, setCountryState] = useState("Sweden");

  return (
    <React.Fragment>
      <Typography variant="h5" component="h2" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextInput value={firstNameState}
                     setValue={setFirstNameState}
                     label="First name"
                     required
                     id="first-name"
                     autoComplete="given-name"
                     errorText="You need to write your name yo"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput value={lastNameState}
                     setValue={setLastNameState}
                     label="Last name"
                     required
                     id="last-name"
                     autoComplete="family-name"
                     errorText="You need to write your last name yo"/>
        </Grid>
        <Grid item xs={12}>
          <TextInput value={addressState}
                     setValue={setAddressState}
                     label="Address"
                     id="adress"
                     autoComplete="shipping street-address"
                     errorText="Hey dude what about your address?"
                     required/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput value={cityState}
                     setValue={setCityState}
                     label="City"
                     id="city"
                     autoComplete="shipping address-level2"
                     errorText="Hey dude what about your city?"
                     required/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput value={stateState} setValue={setStateState} label="State/Province/Region" id="state" required/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput value={zipState} setValue={setZipState} label="Zip / Postal code" id="zip"
                     autoComplete="shipping postal-code" validationPattern="^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$"
                     errorText="What you playing at? That's not a valid zip!" helperText="A Swedish zip code with 5 digits" required numeric/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput value={countryState} setValue={setCountryState} label="Country" id="country"
                     autoComplete="shipping country" helperText="We can only deliver to Sweden at this time" required readOnly/>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
