import { userContext } from "./App";
import { useContext } from "react";
import NavBar from "./NavBar";
import "./listofusers.css"

function ListOfUsers() {
  const { userList } = useContext(userContext);

  return (
    <>
      <NavBar></NavBar>
      <div id="list-container" >
        <ul>
          {userList.map((e) => (
            <li key={e.id} >
              <div>
                <p>Name: {e.name}</p>
                <p>Surname: {e.surname}</p>
                <p>Login: {e.login}</p>
                <p>Password: {e.password}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListOfUsers;
