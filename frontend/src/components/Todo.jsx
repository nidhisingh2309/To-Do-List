import { useState } from "react";
import { toggleTodo,updateTodo,deleteTodo } from "../redux/actions";


import { useDispatch } from "react-redux";
//styling of the todo list text components
const Todo=({todo})=>{

    const [editing,setEditing]=useState(false);
    const [text,setText]=useState(todo.data);

    const dispatch=useDispatch();

    const onFormSubmit=(e)=>{
        e.preventDefault();

        setEditing(prevState=>!prevState);

        dispatch(updateTodo(todo._id,text))
    }
    return (
        <li className="main" onClick={()=>dispatch(toggleTodo(todo._id))}
            //styling for a using a cross for done todos
            style={{
                textDecoration:todo.done?'line-through':'',
                color:todo.done?'azure':'azure'
            }}
        >
            <span style={{display:editing?'none':''}}>{todo.data}</span>

            <form style={{display:editing?'inline':'none'}}
                onSubmit={onFormSubmit}
            
            >
                <input type="text" value={text} className="edit-todo"
                    onChange={(e)=>setText(e.target.value)}
                />

            </form>
            <span className="icons" onClick={()=>dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash"/>
            </span>

        
            <span className="icons" onClick={()=>setEditing(prevState=>!prevState)}>
                
                <i className="fas fa-pen"/>
            </span>
        </li>
    )
}


export default Todo;