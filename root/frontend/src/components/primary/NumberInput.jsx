import react from "react";

function NumberInput(props){
    return(
        <>
            <div className="form-floating mb-3">
                <input type={props.type} className="form-control" id={props.id} name={props.name} placeholder={props.name} min={props.min} max={props.max} required={props.required} />    
                <label for={props.name}>{props.name}<span className="">{props.extraText}</span> {props.required && <span className="text-danger">*</span> }</label>
            </div>
        </>
    );
}

export default NumberInput;