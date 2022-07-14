import Task from "../Task/Task";



function TaskList(props){
    console.log('props: ', props);
   
    
    
    return (
    <>
    {props.tasks ? props.tasks.map((x,index)=> <Task key={x._id} details={x} deleteTask={props.deleteTask} UpdateTask={props.UpdateTask} > <div>Hello Task</div></Task>) : <p>Pas de contenu</p>}
    
    </>   
)
    
}


export default TaskList 