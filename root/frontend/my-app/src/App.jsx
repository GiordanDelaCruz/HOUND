import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button, Container, Typography } from "@mui/material";
import CompletedExercise from "./components/CompletedExercise";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid2 } from "@mui/material";
import AddWorkout from "./components/AddWorkout";
import NavBar from "./components/NavBar";
// import BasicDateCalendar from "./components/BasicDateCalendar";

// Connect to Supabase
const supabaseUrl = "https://vocsmhbcgypycbmkiewj.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#A1B4E1",
    },
    secondary: {
      main: "#FDDEAB",
    },
  },
});

function App() {
  const exerciseHeaders = [
    "weekday",
    "date",
    "tag",
    "type",
    "name",
    "duration",
    "weight",
    "reps",
    "sets",
    "additional_notes",
  ];

  const hiddenExerciseHeaders = [
    "id",
    "created_at",
    "weekday",
    "date",
    "workout_id",
    "exercise_id",
    "tag",
    "type",
    "name",
    "duration",
    "weight",
    "reps",
    "sets",
    "additional_notes",
  ];

  // React Hook
  const [exercise, setExercise] = useState([]);
  const [previousExercise, setPreviousExercise] = useState([]);

  // Render page initialy
  useEffect(() => {
    getExercise();
  }, []);

  useEffect(() => {
    getPreviousExercise();
  }, []);

  // GET a list of all exercises in the database
  async function getExercise() {
    const { data } = await supabase.from("exercise").select();
    setExercise(data);
  }

  // GET exercises a user completed completed
  async function getPreviousExercise() {
    const { data, error } = await supabase.from("exercise_completed").select(`
      id,
      weekday,
      date,
      duration,
      weight,
      reps,
      sets,
      additional_notes,
      exercise(name, tag, type)
    `);

    // const { data } = await supabase.from("exercise_completed").select();
    // console.log(Object.keys(data[0]));
    // console.log(data);
    setPreviousExercise(data);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Container>
          <AddWorkout exercises={exercise}></AddWorkout>
        </Container>
        <Container>
          <Grid2 container spacing={2}>
            <Grid2 item size={9}>
              <Typography></Typography>
              <CompletedExercise data={previousExercise}></CompletedExercise>
            </Grid2>
            <Grid2 item size={3}>
              {/* <BasicDateCalendar></BasicDateCalendar> */}
            </Grid2>
          </Grid2>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
