import react from "react";

function CheckInput(props){
    return(
        <div>
             <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id={props.id} name={props.name} required={props.required}/>
                <label class="form-check-label" for={props.name}>{props.name}</label>
            </div>
        </div>
    );
}

export default CheckInput;
