import react from "react";

function GeneralInput(props){
    return(
        <>
            <div className="form-floating mb-3">
                {/* Mandatory Input */
                    props.isMandatory && 
                    <input type={props.type} className="form-control" id={props.id} name={props.name} placeholder={props.name} required />    
                }
                {/* Optional Input */
                    !props.isMandatory && 
                    <input type={props.type} className="form-control" id={props.id} name={props.name} placeholder={props.name} />
                }

                {/* Label */}
                <label for={props.name}>{props.name} {props.isMandatory && <span className="text-danger">*</span> }</label>
            </div>
        </>
    );
}

export default GeneralInput;