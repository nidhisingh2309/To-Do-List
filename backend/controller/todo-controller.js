import todo from "../model/validate.js";


export const addToDo=async(request,response)=>{
   try {
    const newTask=await todo.create({
        data:request.body.data,
        createdAt:Date.now()
   })

   //saving the data in database
   await newTask.save();

    return response.status(200).json(newTask);
}

catch(error){
    return response.status(500).json(error.message);
}


}


export const getAllTodos=async(request,response)=>{
    try {
        //sort in descending order according to time of creation
   const todos=await todo.find({}).sort({'createdAt':-1})
    return response.status(200).json(todos);
}

catch(error){
    return response.status(500).json(error.message);
}

}

//toggling the value of to do as done or not on click and saving it in the database
export const toggleTodo=async(request,response)=>{
    try {
        //sort in descending order according to time of creation
    const doRef=await todo.findById(request.params.id);

    const update=await todo.findOneAndUpdate(
        {_id:request.params.id},
        {done:!doRef.done}
    )

    await update.save();
    return response.status(200).json(update);
}

catch(error){
    return response.status(500).json(error.message);
}
}

//updating the value on edit and saving in database

export const updateTodo=async(request,response)=>{
    try {
        await todo.findOneAndUpdate(
        {_id:request.params.id},
        {data:request.body.data}
        )

        //fetching the updated data
    const todonew=await todo.findById(request.params.id);
    return response.status(200).json(todonew);
}

catch(error){
    return response.status(500).json(error.message);
}
}


//deleting the value on clicking to delete button


export const deleteTodo=async(request,response)=>{
    try {
       const tododelete=await todo.findByIdAndDelete(request.params.id);

    return response.status(200).json(tododelete);
}

catch(error){
    return response.status(500).json(error.message);
}
}





