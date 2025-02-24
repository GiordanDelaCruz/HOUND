import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function InputAdornments({ InputType }) {
  //   console.log(InputType);
  return (
    <FormControl sx={{ m: 0, width: "25ch" }} variant="outlined">
      <OutlinedInput
        id={`outlined-adornment-${InputType}`}
        endAdornment={<InputAdornment position="end">lb</InputAdornment>}
        aria-describedby={`outlined-${InputType}-helper-text`}
        inputProps={{
          "aria-label": { InputType },
        }}
        type="number"
      />
      <FormHelperText id={`outlined-${InputType}-helper-text`}>
        Weight
      </FormHelperText>
    </FormControl>
  );
}
