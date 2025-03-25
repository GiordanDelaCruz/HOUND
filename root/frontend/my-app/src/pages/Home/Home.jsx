import { Button, Container, Typography } from "@mui/material";
import CompletedExercise from "./../../components/ui/CompletedExercise";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid2 } from "@mui/material";
import AddWorkout from "../AddWorkout/AddWorkout";
import NavBar from "./../../components/ui/NavBar";

// Connect to Supabase
// const supabaseUrl = "https://vocsmhbcgypycbmkiewj.supabase.co";
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

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

function Home({ exerciseHeaders, exerciseCompleted }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Container>
          {/* <AddWorkout exercises={exercise}></AddWorkout> */}
          {/* <AddWorkout></AddWorkout> */}
        </Container>
        <Container>
          <Grid2 container spacing={2}>
            <Grid2 size={9}>
              <Typography></Typography>
              <CompletedExercise data={exerciseCompleted}></CompletedExercise>
            </Grid2>
            <Grid2 size={3}></Grid2>
          </Grid2>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
