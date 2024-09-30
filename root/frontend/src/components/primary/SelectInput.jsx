import react from "react";
import { v4 as uuidv4 } from 'uuid';

function SelectInput(props){
    return(
        <>
            <div className="form-floating mb-3">
                <select className="form-select" id={props.id} required={props.required}>
                    {props.options.map( (elem, idx) => {
                        return(
                            <option value={elem}>{elem}</option>
                        );
                    })}
                </select>
               
                 <label for={props.id}>{props.name} {props.required && <span className="text-danger">*</span> }</label>
            </div> 
        </>
    );
}

export default SelectInput;