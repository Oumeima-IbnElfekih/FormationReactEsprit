import * as types from "../types"
import * as api from "../../services/tasks.service"
export const fetchTasks =() => {
    const res = api.fetchTasks()
    return {
        type : types.FETCH_TASKS ,
        tasks : res,
    }
}
export const AddTask =(task) => {
    const res = api.addTask(task)
    return {
        type : types.ADD_TASKS ,
        task : res,
    }
}