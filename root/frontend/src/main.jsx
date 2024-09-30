import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
// Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Components
import App from './App.jsx';
import AddWorkout from './components/AddWorkout'
import ExerciseForm from './components/ExerciseForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addWorkout",
    element:  <AddWorkout />,
  }, 
  {
    path: "/addExercise",
    element:  <ExerciseForm />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
