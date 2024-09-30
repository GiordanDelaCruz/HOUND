import react from "react";

function GeneralInput(props){
    return(
        <>
            <div className="form-floating mb-3">  
                <input type={props.type} className="form-control" id={props.id} name={props.name} placeholder={props.name} required={props.required} />    
                <label for={props.name}>{props.name} {props.required && <span className="text-danger">*</span> }</label>
            </div>
        </>
    );
}

export default GeneralInput;