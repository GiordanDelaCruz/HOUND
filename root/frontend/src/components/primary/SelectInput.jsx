import react from "react";
import { v4 as uuidv4 } from 'uuid';

function SelectInput(props){
    return(
        <>
            <div className="form-floating mb-3">
                {/* Mandatory Input */
                    props.isMandatory && 
                    <select className="form-select" id={props.id} required>
                        {props.options.map( (elem, idx) => {
                            return(
                                <option value={elem}>{elem}</option>
                            );
                        })}
                    </select>
                }
                 {/* Optional Input */
                    !props.isMandatory && 
                    <select className="form-select" id={props.id} >
                        {props.options.map( (elem, idx) => {
                            return(
                                <option value={elem}>{elem}</option>
                            );
                        })}
                    </select>
                }

                 {/* Label */}
                 <label for={props.id}>{props.name} {props.isMandatory && <span className="text-danger">*</span> }</label>
            </div> 
        </>
    );
}

export default SelectInput;