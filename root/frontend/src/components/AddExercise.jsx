import react from "react";
import '../assets/styles/AddExercise.css';

function AddExercise(props){
    return(
        <div>
            <h1>Add Exercise</h1>

            <form action="">
                <fieldset>
                    <legend>LEGEND: Exercise</legend>
                </fieldset>
            </form>
            <div class="mb-3">
                <label for="exercise" class="form-label">Exercise: </label>
                <input name="exercise" class="form-control" type="text" id="exercise"/>
            </div>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple/>
            </div>
            <div class="mb-3">
                <label for="formFileDisabled" class="form-label">Disabled file input example</label>
                <input class="form-control" type="file" id="formFileDisabled" disabled/>
            </div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label">Small file input example</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file"/>
            </div>
            <div>
                <label for="formFileLg" class="form-label">Large file input example</label>
                <input class="form-control form-control-lg" id="formFileLg" type="file"/>
            </div>
        </div>
    );
}

export default AddExercise;