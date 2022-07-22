
import './App.css';
import Hello from './components/hello/Hello';
import TaskPage from './components/taskPage/TaskPage';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Menu from './components/Menu/Menu';
import TaskDetails from './components/pages/TaskDetails/TaskDetails';
import TeacherRoutes from './components/TeacherRoutes/TeacherRoutes';
import Login from './components/pages/Login/Login';
import { useEffect, useState } from 'react';
import { me } from './services/tasks2.service';
function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/teachers/tasks" replace />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="teachers/" element={<TeacherRoutes />}>
            <Route path="tasks" element={<TaskPage />} />
            <Route path="tasks/:id" element={<TaskDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
// function App() {
//   const token = localStorage.getItem("token") ;
//   const [ user, setUser] = useState({});
//   useEffect(() => {
//     const fetchMe =async()=> {
//         try {
//               const user = await me() ;
//               setUser(user) ;
//         }catch (e){

//         }
//     }
//     fetchMe()
  
    
//   }, [])
  
//   if (token && user.role === "admin") {
//     // private routes
//     return (
//       <div className="app">
//         <Router>
//           <Menu />
//           <Routes>
//             <Route
//               path="/"
//               element={<Navigate to="/teachers/tasks" replace />}
//             />
//             <Route path="/hello" element={<Hello />} />
//             <Route path="teachers" element={<TeacherRoutes />} >
//             <Route path="tasks" element={<TaskPage />} />
//           <Route path="tasks/:id" element={<TaskDetails />} /> 
//           </Route>
//           </Routes>
//         </Router>
//       </div>
//     )
//   } else if (token && user.role === "user") {
//     return (
//       <div className="app">
//         <Router>
//           <Menu />
         
//         </Router>
//       </div>
//     )
//   } else if (!token) {
//     // public routes
//     return (
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     )
//   } else {
//     return <div>loading...</div>
//   }
// }


export default App;
