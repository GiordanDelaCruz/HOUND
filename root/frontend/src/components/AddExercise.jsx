import react from "react";
import { v4 as uuidv4 } from 'uuid';
import '../assets/styles/AddExercise.css';

// React Components
import GeneralInput from "./primary/GeneralInput";
import SelectInput from "./primary/SelectInput";
import TextAreaInput from "./primary/TextAreaInput";

function AddExercise(props){
    let tags = ["Shoulders", "Chest", "Back", "Arms", "Legs"];

    return(
        <>
            <form action="">
                <fieldset>
                    <legend>Add Exercise</legend>
                    {/* Exercise */}
                    <GeneralInput 
                        key = {uuidv4()}
                        name = "Exercise"
                        type = "text"
                        id = "floatingExercise"
                        isMandatory = {true}
                    />
                    {/* Focus */}
                    <GeneralInput 
                        key = {uuidv4()}
                        name = "Focus"
                        type = "text"
                        id = "floatingFocus"
                        isMandatory = {false}
                    />
                    {/* Tag */}
                    <SelectInput
                        key = {uuidv4()}
                        name = "Workout Tag"
                        id = "floatingSelect"
                        isMandatory = {true}
                        options = {tags}
                    />
                    {/* Reps */}
                    <GeneralInput 
                        key = {uuidv4()}
                        name = "Reps"
                        type = "number"
                        id = "floatingReps"
                        isMandatory = {true}
                    />
                    {/* Sets */}
                    <GeneralInput 
                        key = {uuidv4()}
                        name = "Sets"
                        type = "number"
                        id = "floatingSets"
                        isMandatory = {true}
                    />
                    {/* Additional Notes */}
                    <TextAreaInput
                        key = {uuidv4()}
                        name = "Additional Notes"
                        id = "floatingAdditionalNotes"
                        isMandatory = {true}
                    />
                </fieldset>   
            </form>
        </>
    );
}

export default AddExercise;