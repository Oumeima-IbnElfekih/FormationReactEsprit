import { useState } from "react";
import "./TaskForm.css"

function TaskForm(props){
    // props.sayHello("hello Esprit") ; 
    const addTask = "Add a task"
    const steps =["Enter the task title" ,"Click and add task"]
    const [title , setTitle] = useState("learn");
   
    return (
       
       <>
             <ul>
              {steps.map((s,index) => <li key={index}>{s}</li>)}
              </ul> 
    <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
    <button type="submit" onClick={()=>props.addTask(title)}>{addTask}</button>
    </>
)
    
}


export default TaskForm 