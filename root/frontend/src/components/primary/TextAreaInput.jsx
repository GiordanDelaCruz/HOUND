import react from "react";

function TextAreaInput(props){
    return(
        <>
            <div className="form-floating">
                {/* Mandatory Input */
                    props.isMandatory && 
                    <textarea className="form-control" placeholder="" id={props.name} name={props.name} required ></textarea>
                }
                {/* Optional Input */
                    !props.isMandatory && 
                    <textarea className="form-control" placeholder="" id={props.name} name={props.name}></textarea>
                }
        
                {/* Label */}
                <label for={props.id}>{props.name}{props.isMandatory && <span className="text-danger">*</span>}</label>
            </div>
        </>
    );
}

export default TextAreaInput;