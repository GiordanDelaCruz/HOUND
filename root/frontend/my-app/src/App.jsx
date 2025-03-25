import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddWorkout from "./pages/AddWorkout/AddWorkout";
import History from "./pages/History/History";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  // React Hook
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseCompleted, setExerciseCompleted] = useState([]);

  // Render page initialy
  useEffect(() => {
    getExerciseData();
  }, []);
  useEffect(() => {
    getExerciseCompleted();
  }, []);

  // GET a list of all exercises in the database
  async function getExerciseData() {
    const { data } = await supabase.from("exercise").select();
    setExerciseData(data);
  }

  // GET a list of all exercises completed by a user
  async function getExerciseCompleted() {
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
    setExerciseCompleted(data);
  }

  // Exercise Data
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
  const exerciseTags = [
    "Abs",
    "Arms",
    "Back",
    "Cardio",
    "Chest",
    "Legs",
    "Shoulders",
  ];
  const exerciseTypes = [
    "Barbell",
    "Body Weight",
    "Dumbbell",
    "Equipment",
    "Machine",
  ];
  const exerciseNames = exerciseData.map((elem) => elem.name).sort();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  exerciseHeaders={exerciseHeaders}
                  exerciseCompleted={exerciseCompleted}
                />
              }
            />
            <Route
              path="/addWorkout"
              element={
                <AddWorkout
                  exerciseNames={exerciseNames}
                  exerciseTags={exerciseTags}
                  exerciseTypes={exerciseTypes}
                />
              }
            />
            <Route path="/history" element={<History></History>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
