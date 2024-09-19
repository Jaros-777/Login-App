import "./App.css";
import HomePage from "./HomePage";
import CreateAccount from "./CreateAccount.jsx";
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

function App() {
  const [currentLogged, setCurrentLogged] = useState(0);
  const [name, setName] = useState("Null");
  const [surname, setSurname] = useState("Null");

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Michal",
      surname: "Kowalski",
      login: "michal",
      password: "michal"
    },
    {
      id: 2,
      name: "Michal",
      surname: "jakis",
      login: "michal1",
      password: "michal1"
    },
  ]);
  

  return (
    <>
      <userContext.Provider value={{userList, setUserList,currentLogged, setCurrentLogged,name, setName,surname, setSurname}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
