import { useCallback, useEffect, useState } from "react";
import Task from "./Task/Task"
import TaskForm from "./TaskForm/TaskForm"
import TaskList from "./TaskList/TaskList";
import * as api from "../../services/tasks.service"
import { useDispatch ,useSelector } from "react-redux"
import { AddTask, fetchTasks } from "../../redux/actions/tasks.actions";
function TaskPage(){
   const dispatch =useDispatch();
   const tasks = useSelector((state)=>state.tasks.list)
   const [isVisible, setIsVisible]=useState(true) ;
  //  const [tasks , setTasks]=useState([])
   const [ loading ,setLoading] = useState(false);
   const [error , setError] = useState(false) ;
   const [ searchValue, setSearchValue]=useState("") ;
   const toggleVisibility=()=>
   {
       setIsVisible(!isVisible)
   }
   console.log('tasks: ', tasks);
   const addTask = async (title)=> {
      //  try {
      //   setLoading(true);
      //   const newTask = await api.addTask({ title ,})
      //   // setTasks([...tasks,newTask])
      //   setLoading(false);
      //  } catch (e){
      //       console.log("error")
      //  }
      dispatch(AddTask({ title ,}))
   }
   const deleteTask = async (id)=> {
      try {
         setLoading(true);
        await api.deleteTask(id)
        const newtasks = tasks.filter((task) => task._id !== id)
        // setTasks(newtasks);
         setLoading(false);
       } catch (e){
            console.log("error")
       }
   
}
useEffect(() => {
  dispatch(fetchTasks())

 
}, [])

// useEffect(() => {
//     setLoading(true);
//     const fetchData = async () => {
//         const res = await api.fetchTasks();
//        setTasks(res);
//         setLoading(false);
//       };

//     fetchData();
//   }, []);

// useEffect(()=>{
//     let didCancel = false;
//     async function fetchData(){
//         try {
//             setLoading(true);
//             if(searchValue.length ===0) {
//                     console.log("task empty")
//                     setTasks([])
//                     setLoading(false)
//             }else 
//             {
//                console.log("did" ,didCancel)
//                const res = await api.fetchTasksByFilter(searchValue);
//               if (!didCancel) {
              
//                 // console.log('res: ', res);
//                // console.log(res)
//                 setTasks(res);
//                 setLoading(false);
//               }
           
                
//             }
          
//         } catch(e){
           
//         }
       
//     }
// fetchData()
// return ()=> {
//     console.log("clean up");
//     didCancel =true ;
// }
// },[searchValue ])
//avec map
const UpdateTask = async (id,title)=> {
   
   
   

    try {
 
        const index = tasks.findIndex(
            (item) => item._id === id
        );
        const updatedTask = await api.updateTask(id,tasks[index])
        if (index !== -1) {
            tasks[index] = updatedTask;
        }
       console.log(updatedTask);
      //  setTasks(tasks);
     
      } catch (e){
           console.log("error")
      }

   


} ;

   


    


                   
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
          <input type="text" name="title" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
 
            <button onClick={toggleVisibility}>Toggle Visibility</button>
            {loading && (<p> loading ....</p>) } 
          {/* {error && (<p> No data from backend </p>) }  */}
          {!loading && ( <>
        <TaskForm addTask={addTask}  />
        {isVisible ? <TaskList tasks={tasks} deleteTask={deleteTask} UpdateTask={UpdateTask}/> : <></> }
        
        </>) } 
          
        
     
        </>
)
    
}


export default TaskPage 