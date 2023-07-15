import { useState } from "react";
import {useDispatch} from "react-redux";

import { addNewToDo } from "../redux/actions";

const Todo=()=>{

    const [text,setText]=useState("");

    const dispatch=useDispatch();


    const onFormSubmit=(e)=>{
        e.preventDefault();
        dispatch(addNewToDo(text));
        setText("");

    }

    const onInputChange=(e)=>{
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
           
            placeholder="Enter new task"
             className="input"
             onChange={onInputChange}
             value={text}
            />
        </form>
    )
}


export default Todo;