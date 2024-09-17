import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {

  return (
    <>
        <div id="nav-container">
        <Link to="/create"><button>Login</button></Link>
        </div>
    </>
  )
}

export default NavBar
