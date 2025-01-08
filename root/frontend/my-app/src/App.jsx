import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://vocsmhbcgypycbmkiewj.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    getExercise();
  }, []);

  async function getExercise() {
    const { data } = await supabase.from("exercise").select();
    setExercise(data);
  }

  return (
    <ul>
      {exercise.map((exercise) => (
        <li key={exercise.name}>{exercise.name}</li>
      ))}
    </ul>
  );
}

export default App;