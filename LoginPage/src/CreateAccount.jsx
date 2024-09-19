import { useState } from "react";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from "uuid";
import "./Login.css";
import { userContext } from "./App";
import { useContext } from "react";

function CreateAccount() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function addUser() {
    const newUser = { 
      id: uuidv4(), 
      name: userName, 
      surname: userSurname,
      login: login,
      password: password 
    };
    setUserList([...userList, newUser]);
  }

  const { userList, setUserList } = useContext(userContext);

  return (
    <>
      <NavBar></NavBar>

      <div id="login-container">
        <p>Type login</p>
        <input type="text" onChange={(e) => setLogin(e.target.value)} />
        <p>Type password</p>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <p>Type name</p>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <p>Type surname</p>
        <input type="text" onChange={(e) => setUserSurname(e.target.value)} />
        <br></br>
        <button
          onClick={() => {
            addUser();
          }}
        >
          Add User
        </button>
      </div>
    </>
  );
}

export default CreateAccount;
