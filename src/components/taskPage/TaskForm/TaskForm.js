import { useState } from "react";
import "./TaskForm.css"
import { useForm } from "react-hook-form";
function TaskForm(props){
    // props.sayHello("hello Esprit") ; 
    const addTask = "Add a task"
    const steps =["Enter the task title" ,"Click and add task"]
    const [title , setTitle] = useState("learn");
    const { register, handleSubmit ,watch ,formState :{errors} } = useForm();
    return (
       
       <>
             <ul>
              {steps.map((s,index) => <li key={index}>{s}</li>)}
              </ul> 
    <input type="text"
     name="title"
    //   defaulyValue={title} 
      {...register("title", {required : true}) }
   />
   {errors.title && <span>Required field !!!!!</span>}
    <button type="submit" onClick={handleSubmit(()=>props.addTask(title))}>{addTask}</button>
    </>
)
    
}


export default TaskForm 