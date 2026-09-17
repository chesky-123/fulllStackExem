import { useNavigate } from "react-router";
import { register } from "../store/signUp";

export default function Register() {
  const user = {
    email: "",
    userName:"",
    password: ""
  }
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        register(user)
          .then(u => {
            navigate("/login");
          }).catch(console.error)
      }}>
        <input onChange={e => user.email = e.target.value} type="email" placeholder='enter your email...' required />
        <input onChange={e => user.userName = e.target.value} type="text" placeholder='enter your name...' />
        <input onChange={e => user.password = e.target.value} type="password" placeholder='enter your password...' required/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

