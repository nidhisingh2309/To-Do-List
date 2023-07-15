import * as actionTypes from '../actions/type';

export const todosReducers=(state=[],action)=>{

    switch(action.type){

        case actionTypes.ADDNEW_TODO:
            return [action.payload,...state]

        case actionTypes.GETALL_TODO:
            return action.payload;
//update the value in redux store
        case actionTypes.TOGGLE_TODO:
            return state.map(todo=>(
                todo._id===action.payload._id?{...todo,done:!todo.done}:todo
            ))

    //updating the data after editing in redux store
        case actionTypes.UPDATE_TODO:
            return state.map(todo=>(
                todo._id===action.payload._id?{...todo,data:action.payload.data}:todo
            ))
    
    //deleting the data in redux store

        case actionTypes.DELETE_TODO:
            return state.filter(todo=>todo._id!==action.payload._id);

        default:
        return state;
    }
    
}