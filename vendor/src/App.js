import {
  BrowserRouter,
  Routes,
  Route,
  Ridirect,
  Switch,
  Navigate
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import User from "./Pages/user/User.js";
import Login from "./Pages/login/Login.jsx";

import { AuthContext } from "./components/context/AuthContext.jsx";
import { useContext } from "react";


function App() {

  const ProtectedRoute=({children})=>{
    const {user}=useContext(AuthContext)

    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }
  return(
  <BrowserRouter>
    <Routes>
     {/*  <Route path="/" element={<Home />} />
      <Route path='user' element={<User />} /> */}
      <Route path='/'>

        <Route path='login'>
            <Route index element={<Login />} />
          </Route>
        <Route index element={
        <ProtectedRoute>
        
        <Home />
        </ProtectedRoute>} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
