//import logo from './logo.svg';
import "./App.css";
import Admincomponent from "./Component/AdminComponent";
import LoginComponent from "./Component/LoginComponent";
import Bus from "./Component/pages/Bus/Bus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import { Navbar } from "./Component/Navbar/Navbar";
import { Footer } from "./Component/Footer/Footer";
import Register from "./Component/pages/Register/Register";
import Login from "./Component/pages/Login/Login";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Bus />} path="/bus">
          {" "}
        </Route>
        <Route element={<Register/> }path="/register"></Route>

        <Route element={<Login/> }path="/login"></Route>

        {/* <div className="App"> */}
        {/* <LoginComponent /> */}
        {/* <Admincomponent /> */}
        {/* </div> */}
      </Routes>
     
    </div>
  );
}

export default App;
