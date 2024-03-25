import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { DashBoard } from "./components/Pages/Dashboard";
import {Login} from "./components/Pages/Login"
import { Register } from "./components/Pages/Register";
import { About } from "./components/Pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
        <ToastContainer autoClose={3000} position={"right"} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
