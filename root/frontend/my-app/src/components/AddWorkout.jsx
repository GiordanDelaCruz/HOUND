import { Box, Grid2, TextField, Typography } from "@mui/material";
import BasicSelect from "./BasicSelect";
import InputAdornment from "./InputAdornment";

const exerciseTagsArray = [
  "Abs",
  "Arms",
  "Back",
  "Cardio",
  "Chest",
  "Legs",
  "Shoulders",
];

const exerciseTypeArray = [
  "Barbell",
  "Body Weight",
  "Dumbbell",
  "Equipment",
  "Machine",
];

function AddWorkout({ exercises }) {
  let exerciseArray = [];
  exercises.map((elem, index) => {
    exerciseArray.push(elem.name);
  });
  exerciseArray.sort();
  return (
    <>
      <Grid2 container spacing={2} sx={{ py: 10 }}>
        <Grid2 item size={12} sx={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Typography variant="h3" gutterBottom>
            Add Workout
          </Typography>
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <BasicSelect
            id="input-exercise"
            inputType={"Exercise"}
            options={exerciseArray}
            required
            variant="outlined"
          />
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <BasicSelect
            id="input-tags"
            inputType={"Tag"}
            options={exerciseTagsArray}
            required
            variant="outlined"
          />
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <BasicSelect
            id="input-type"
            inputType={"Type"}
            options={exerciseTypeArray}
            required
            variant="outlined"
          />
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <InputAdornment InputType={"Weight"}></InputAdornment>
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <TextField
            id="input-duration"
            helperText="Minutes"
            label="Duration"
            type="number"
            variant="outlined"
          />
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <TextField
            id="input-reps"
            helperText="Reps"
            label="Reps"
            type="number"
            variant="outlined"
          />
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <TextField
            id="input-sets"
            helperText="Sets"
            label="Sets"
            type="number"
            variant="outlined"
          />
        </Grid2>
        <Grid2 item sx={{ xs: 2, sm: 3, md: 4, lg: 4, xl: 4 }}>
          <TextField
            id="input-additional-notes"
            label="Additional Notes"
            multiline
            rows={4}
            defaultValue=""
          />
        </Grid2>
      </Grid2>
    </>
  );
}

export default AddWorkout;
