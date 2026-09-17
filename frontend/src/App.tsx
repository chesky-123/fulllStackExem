import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {

  return (
   <Routes>
    <Route path="/login" element={
          <ProtectedRoutes isAuthRequired={false}>
            <Login />
          </ProtectedRoutes>
        } />
        <Route path="/register" element={
          <ProtectedRoutes isAuthRequired={false}>
            <Register />
          </ProtectedRoutes>
        } />
        <Route path="/profile" element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        } />
   </Routes>
  )
}

export default App
