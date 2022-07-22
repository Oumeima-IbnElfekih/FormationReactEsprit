import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchTaskById } from "../../../services/tasks.service";



function TaskDetails() {
  const [ task , setTask] = useState({});
  const params = useParams() ;
  console.log("useLocation", useLocation());
  console.log('useParams: ', useParams());
    console.log(params)
    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                const res = await fetchTaskById(params.id);
                setTask(res);

            }catch(e) {

            }
        }
        fetchData();
    },[params.id])
  return (
    <>
    <h1> Task Details </h1>
    <h2> {task.title} </h2>
    </>
  );
}

export default TaskDetails;
