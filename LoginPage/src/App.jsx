import "./App.css";
import HomePage from "./HomePage";
import CreateAccount from "./CreateAccount.jsx";
import Login from "./Login.jsx";
import ListOfUsers from "./ListOfUsers.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

function App() {
  const [name, setName] = useState("Null");
  const [surname, setSurname] = useState("Null");

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Michael",
      surname: "Jordan",
      login: "michael",
      password: "michael"
    },
    {
      id: 2,
      name: "Stev",
      surname: "Javobs",
      login: "steve",
      password: "steve"
    },
  ]);
  

  return (
    <>
      <userContext.Provider value={{userList, setUserList,name, setName,surname, setSurname}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/listofusers" element={<ListOfUsers />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
