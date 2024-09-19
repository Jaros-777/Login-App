import { userContext } from "./App";
import { useContext, useState } from "react";
import NavBar from "./NavBar";
import "./Login.css";

function Login() {
  const { userList,setName, setSurname } = useContext(userContext);
  const [log, setLog] = useState("");
  const [pass, setPass] = useState("");

  const [answer, setAnswer] = useState("");

  function Login(login, password) {
    let logging = false;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].login === login && userList[i].password === password) {
        setAnswer("Logged in correctly");
        setSurname(userList[i].surname)
        setName(userList[i].name)
        window.location.pathname = '/'
        return;
      }
    }
    if (!logging) {
      setAnswer("There is no such user");
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <div id="login-container">
        <input
          type="text"
          placeholder="Login"
          onChange={(e) => setLog(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <p>{answer}</p>
        <button
          onClick={() => {
            Login(log, pass);
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
