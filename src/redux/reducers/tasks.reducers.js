import * as types from "../types"
const initialState = {
    list :[],
}
export const tasks =(state =initialState ,action) =>{
switch (action.type) {
    case types.FETCH_TASKS:
        
        return {...state,list : action.tasks}
    case types.ADD_TASKS:
        
        return {...state,list: state.list.concat(action.task)}
    default:
        return state;
}
}