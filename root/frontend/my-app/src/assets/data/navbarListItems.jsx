import { v4 as uuidv4 } from "uuid";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddIcon from "@mui/icons-material/Add";

export const mainNavbarItems = [
  {
    id: uuidv4(),
    icon: <HomeIcon />,
    label: "Home",
    route: "/",
  },
  {
    id: uuidv4(),
    icon: <FitnessCenterIcon />,
    label: "History",
    route: "/history",
  },
  {
    id: uuidv4(),
    icon: <AddIcon />,
    label: "Add Workout",
    route: "/addWorkout",
  },
];
