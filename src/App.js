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
import PublicLayout from "./Layout/PublicLayout";
import AddBus from "./Component/pages/Bus/AddBus";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route element={<PublicLayout/>  } path="">
        
        <Route element={<Home />} path={`${process.env.PUBLIC_URL}/`}></Route> 
          <Route element={<Home />} path="/home"></Route>
       
       
        <Route element={<Register/> }path="/register"></Route>

        <Route element={<Login/> }path="/login"></Route>
        </Route>
        {/* <div className="App"> */}
        {/* <LoginComponent /> */}
        {/* <Admincomponent /> */}
        {/* </div> */}
        <Route element={<Bus />} path="/bus">
          {" "}
        </Route>
        <Route element={<AddBus />} path="/addbus">
          {" "}
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
