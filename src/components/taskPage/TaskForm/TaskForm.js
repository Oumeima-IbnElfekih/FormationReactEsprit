import { useEffect, useState } from "react";
import "./TaskForm.css"
import { Button } from 'antd';
function TaskForm(props){
    // props.sayHello("hello Esprit") ; 
    const addTask = "Add a task"
    const steps =["Enter the task title" ,"Click and add task"]
    const [title , setTitle] = useState("learn");
   useEffect(()=> {
       document.title =title ;
       console.log("useEffect")
      
   })
   console.log("we are in taskform")
    return (
       
       <>
             <ul>
              {steps.map((s,index) => <li key={index}>{s}</li>)}
              </ul> 
    <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
    <Button type="primary" onClick={()=>props.addTask(title)}>{addTask}</Button>
    </>
)
    
}


export default TaskForm 