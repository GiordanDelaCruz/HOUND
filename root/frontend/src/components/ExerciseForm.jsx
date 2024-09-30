import react from "react";
import { v4 as uuidv4 } from 'uuid';
import '../assets/styles/ExerciseForm.css';

// React Components
import GeneralInput from "./primary/GeneralInput";
import NumberInput from "./primary/NumberInput";
import SelectInput from "./primary/SelectInput";
import TextAreaInput from "./primary/TextAreaInput";
import CheckInput from "./primary/checkInput";

function ExerciseForm(props){
    let tags = ["Shoulders", "Chest", "Back", "Arms", "Legs"];

    return(
        <>
            <form>
                <fieldset> 
                    <div className="container">
                        <div className="row">
                            <legend>Add Exercise</legend>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {/* Exercise */}
                                <GeneralInput 
                                    key = {uuidv4()}
                                    name = "Exercise"
                                    type = "text"
                                    id = "floatingExercise"
                                    required = {true}
                                    extraClass = "bg-primary text-danger"
                                />
                            </div>
                            <div className="col-md-4">
                                {/* Focus */}
                                <GeneralInput 
                                    key = {uuidv4()}
                                    name = "Focus"
                                    type = "text"
                                    id = "floatingFocus"
                                    required = {false}
                                />
                            </div>
                            <div className="col-md-2">
                                {/* Tag */}
                                <SelectInput
                                    key = {uuidv4()}
                                    name = "Workout Tag"
                                    id = "floatingSelect"
                                    required = {true}
                                    options = {tags}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {/* Weight */}
                                <NumberInput 
                                    key = {uuidv4()}
                                    name = "Weight"
                                    type = "number"
                                    id = "floatingWeight"
                                    required = {true}
                                    min = "0"
                                    max = "999"
                                    extraText = " (lb)"
                                />
                            </div>
                            <div className="col-md-2">
                                {/* Reps */}
                                <NumberInput 
                                    key = {uuidv4()}
                                    name = "Reps"
                                    type = "number"
                                    id = "floatingReps"
                                    required = {true}
                                    min = "0"
                                    max = "999"
                                />
                            </div>
                            <div className="col-md-2">
                                {/* Sets */}
                                <NumberInput 
                                    key = {uuidv4()}
                                    name = "Sets"
                                    type = "number"
                                    id = "floatingSets"
                                    required = {true}
                                    min = "0"
                                    max = "999"
                                />
                            </div>
                            <div className="col-md-2">
                               {/* Body Weight */}
                                <SelectInput
                                    key = {uuidv4()}
                                    name = "Body Weight"
                                    id = "floatingBodyWeight"
                                    required = {true}
                                    options = {["Yes", "No"]}
                                />
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-md-12">
                                    {/* Additional Notes */}
                                    <TextAreaInput
                                        key = {uuidv4()}
                                        name = "Additional Notes"
                                        id = "floatingAdditionalNotes"
                                        required = {false}
                                        extraClass = "additional-notes"
                                    />
                                </div>
                        </div>
                        <div className="row">
                            {/* Buttons */}
                            <div class="btn-group" role="group" aria-label="Reset and Submit button">
                                <button type="reset" className="btn btn-secondary">Reset</button>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </fieldset>   
            </form>
        </>
    );
}

export default ExerciseForm;