import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {

  return (
   <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/profil" element={<Profile/>}/>
    <Route path="*" element={<div>404 not found</div>}/>
   </Routes>
  )
}

export default App
