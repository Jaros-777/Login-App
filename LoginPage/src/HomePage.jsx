
import './App.css'
import NavBar from './NavBar'
import { Outlet, Link } from "react-router-dom";
import { UserContext } from './CreateAccount';
import { useContext } from 'react';

function HomePage() {

    const userName = useContext(UserContext)

  return (
    <>
    <NavBar></NavBar>
    <p>{userName}</p>
    <p>hej</p>
    </>
  )
}

export default HomePage
