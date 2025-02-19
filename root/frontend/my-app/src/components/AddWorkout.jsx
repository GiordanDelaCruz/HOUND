import { Grid2, TextField, Typography } from "@mui/material";
import BasicSelect from "./BasicSelect";

let exercise = ["Leg Press", "Bench Press", "Dumbbell Bench Press"];
function AddWorkout() {
  return (
    <>
      <Grid2 container sx={{ py: 2 }}>
        <BasicSelect inputType={"Exercise"} options={exercise}></BasicSelect>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid2>
    </>
  );
}

export default AddWorkout;
