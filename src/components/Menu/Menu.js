
import { Link, NavLink } from 'react-router-dom';


function Menu() {
    const customStyle ={ 
        color : "red"
    }
  return (
    <ul><li> <NavLink 
    style={(params)=> (params.isActive ? {color : "red"} :  {color : "black"} )}
    to="/hello" > Home </NavLink></li>
           
           <li> <NavLink  to="/teachers/tasks"  
           style={(params)=> (params.isActive ? { color: "red" } :  {color : "black"} )}
           > My Tasks</NavLink></li>


    </ul>
  );
}

export default Menu;
