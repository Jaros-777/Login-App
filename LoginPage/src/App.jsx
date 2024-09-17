
import './App.css'
import HomePage from './HomePage'
import CreateAccount from "./CreateAccount.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CreateAccount/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
