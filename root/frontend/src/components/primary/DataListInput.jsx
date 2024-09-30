import react from "react";

function DataListInput(props){
    return(
        <div className="form-floating mb-3">
            {/* TODO: Update for, list, and id */}
            <label for="exampleDataList" class="form-label">Datalist example</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
            <datalist id="datalistOptions" required={props.required}>
                {props.options.map( (elem, idx) => {
                    return(
                        <option value={elem}/>
                    );
                })}
            </datalist>
           
        </div> 
    );
}

export default DataListInput;