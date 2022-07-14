import { useCallback, useState } from "react";
import Task from "./Task/Task"
import TaskForm from "./TaskForm/TaskForm"
import TaskList from "./TaskList/TaskList";


function TaskPage(){
   const [isVisible, setIsVisible]=useState(true) ;
   const [tasks , setTasks]=useState([{
       
    _id :"1",
    title :"Learn HTML",
    duration :60
    
        },{
            _id :"2",
            title :"Learn React",
            duration :90
            
                },{
                    _id :"3",
                    title :"Learn node",
                    duration :70
                    
                        }])

   const toggleVisibility=()=>{
       setIsVisible(!isVisible)
   }
   console.log('tasks: ', tasks);
   const addTask = (title)=> {
       setTasks([...tasks,{ _id : Math.random()+ " ", title}])
   }
   const deleteTask = (id)=> {
    const newTaskList = tasks.filter((t) => {
        return t._id !== id;
      });
    
      setTasks(newTaskList);
   
}
//avec map
const UpdateTask = (id,title)=> {
    console.log(id,title);
    const index = tasks.findIndex(
        (item) => item._id === id
    );
    if (index !== -1) {
        tasks[index] = {...tasks[index],title};
    }
    setTasks(tasks);
   
} ;

    const loading = false ;


    


                   
    return (
        <>
        {/* {loading ? (<p> loading ....</p>) :(
        <>
        <TaskForm/>
        <Task/>
        <Task/>
        <Task/>
        </>)
        } */}
            <button onClick={toggleVisibility}>Toggle Visibility</button>
          {loading && (<p> loading ....</p>) } 
          {!loading && ( <>
        <TaskForm addTask={addTask}  />
        {isVisible ? <TaskList tasks={tasks} deleteTask={deleteTask} UpdateTask={UpdateTask}/> : <></> }
        
        </>) } 
          
        
     
        </>
)
    
}


export default TaskPage 