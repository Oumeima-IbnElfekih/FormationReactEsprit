import { useState } from "react";
import "./Task.css"
import { Button } from 'antd';
import { Link, useNavigate } from "react-router-dom";
function Task(props){
    
    console.log('props: ', props);
    const [isVisible, setIsVisible] = useState(false);
    const [title , setTitle] = useState(props.details.title);
    const navigate = useNavigate();
    const handleDetails =() => {
      if(props.details.duration > 55) {
      navigate(`${props.details._id}`)
      } else {
        navigate("/hello")
      }
    }
    return ( 
    <div className="task" style={{ backgroundColor : "cyan" }} >
  {!isVisible ? <> <div className={`title ${ props.details.duration > 55 ?"customTask":""}`}
    //  style={props.details.duration >55 ? {color: "red" }: { color :"blue"} }
     
    
     >
    <div onClick={handleDetails}>{title} </div>  , {props.details.duration} 
     {/* {props.details && (<p> {props.details.level}</p>) }  */}    
    </div>
    <div className="actions">
    <Button type="primary" onClick={()=>props.deleteTask(props.details._id)}>delete</Button>
           <Button type="primary" onClick={()=>setIsVisible(true)}>update</Button>
    </div>
    {props.children} </>: <>  <input type="text" name="title" value={title}  onChange={(e)=> setTitle(e.target.value)}/>
    <button type="submit" onClick={()=>{props.UpdateTask(props.details._id,title);setIsVisible(!isVisible)}}>Update Task</button>  <button  onClick={()=>setIsVisible(false) } >Annuler</button> </>}
</div>)
    
}


export default Task 