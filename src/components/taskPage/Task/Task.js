import { useState } from "react";
import "./Task.css"

function Task(props){
    
    console.log('props: ', props);
    const [isVisible, setIsVisible] = useState(false);
    const [title , setTitle] = useState(props.details.title);
    
    return ( 
    <div className="task" style={{ backgroundColor : "cyan" }} >
  {!isVisible ? <> <div className={`title ${ props.details.duration > 55 ?"customTask":""}`}
    //  style={props.details.duration >55 ? {color: "red" }: { color :"blue"} }
     
    
     >
     {title} , {props.details.duration} 
     {/* {props.details && (<p> {props.details.level}</p>) }  */}    
    </div>
    <div className="actions">
        <button onClick={()=>props.deleteTask(props.details._id)}>delete</button>
        <button onClick={()=>setIsVisible(true)}>update</button>
    </div>
    {props.children} </>: <>  <input type="text" name="title" value={title}  onChange={(e)=> setTitle(e.target.value)}/>
    <button type="submit" onClick={()=>{props.UpdateTask(props.details._id,title);setIsVisible(!isVisible)}}>Update Task</button>  <button  onClick={()=>setIsVisible(false) } >Annuler</button> </>}
</div>)
    
}


export default Task 