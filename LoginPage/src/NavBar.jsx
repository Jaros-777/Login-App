import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"
import { userContext } from './App'
import { useContext } from 'react'


function NavBar() {

    const {name, surname} = useContext(userContext)
    let logging

  return (
    <>
        <div id="nav-container">
          <div>
          <Link to="/"><button>Home</button></Link>
          <Link to="/create"><button>Create Account</button></Link>
          <Link to="/login"><button>Login</button></Link>
          </div>
          
          <div style={{display: "flex", border: "2px solid black", height: "70%", justifyContent: "center", alignItems:"center", borderRadius: "20px"}}>
            <p>Welcome</p>
            <p>{name}</p>
            <p>{surname}</p>
          </div>
        
        </div>
    </>
  )
}

export default NavBar
