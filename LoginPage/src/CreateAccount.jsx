import { useContext, useState } from "react";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";

export const UserContext = createContext();

function CreateAccount() {
  const [id, setId] = useState("");
  const [name, setName] = useState("a");
  const [surname, setSurname] = useState("a");

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Jacek",
      surname: "Kowalski",
    },
  ]);

  function addUser() {
    const newUser = { id: uuidv4(), name: name, surname: surname };
    setUserList([...userList, newUser]);
  }

  return (
    <>
      <UserContext.Provider value={name}>
        <NavBar></NavBar>

        <div>
          <p>Type name</p>
          <p>{name}</p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <p>Type surname</p>
          <p>{surname}</p>
          <input type="text" onChange={(e) => setSurname(e.target.value)} />
          <br></br>
          <button
            onClick={() => {
              addUser();
            }}
          >
            Add User
          </button>
          {userList.map((user) => (
            <li key={user.id}>
              {user.name} {user.surname}
            </li>
          ))}
        </div>
      </UserContext.Provider>
    </>
  );
}

export default CreateAccount;
