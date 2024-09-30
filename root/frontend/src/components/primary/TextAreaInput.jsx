import react from "react";

function TextAreaInput(props){
    return(
        <>
            <div className="form-floating mb-3">  
                <textarea className={"form-control h-25 " + props.extraClass} placeholder="" id={props.name} name={props.name} rows={props.row} required={props.required} ></textarea>
                <label for={props.id}>{props.name}{props.required && <span className="text-danger">*</span>}</label>
            </div>
        </>
    );
}

export default TextAreaInput;