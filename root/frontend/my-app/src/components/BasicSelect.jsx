import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuidv4 } from "uuid";

export default function BasicSelect({ inputType, options }) {
  //   console.log(inputType);
  //   console.log(options);
  const [input, setInput] = React.useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`simple-${input}-label`}>{inputType}</InputLabel>
        <Select
          labelId={`simple-${input}-label`}
          id={`simple-${input}`}
          value={input}
          label="Input"
          onChange={handleChange}
        >
          {options.map((elem, index) => {
            return (
              <MenuItem key={uuidv4()} value={elem}>
                {elem}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
