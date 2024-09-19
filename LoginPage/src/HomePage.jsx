import { userContext } from "./App";
import { useContext } from "react";
import "./HomePage.css";
import NavBar from "./NavBar";

function HomePage() {
  const { name, surname } = useContext(userContext);

  return (
    <>
      <NavBar></NavBar>
      <div id="info-container">
        <p style={{marginBottom: "1vh"}} >Current Logged</p>
        <p>{name}</p>
        <p>{surname}</p>
      </div>
    </>
  );
}

export default HomePage;
