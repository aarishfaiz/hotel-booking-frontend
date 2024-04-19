import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/Home/Home";
import List from "./Pages/List/List"
import { Route, Routes } from "react-router-dom";
import Hotel from "./Pages/Hotel/Hotel";
import Login from "./Pages/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
