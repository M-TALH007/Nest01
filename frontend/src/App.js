import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { DashBoard } from "./components/Pages/Dashboard";
import {Login} from "./components/Pages/Login"
import { Register } from "./components/Pages/Register";
import  { Detail }  from './components/Pages/Detail'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProfile from "./components/Pages/edit-profile";
import AddUser from "./components/Pages/AddUser";
import { About } from "./components/Pages/About";
// import {AddUser} from './components/Pages/AddUser'

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
        <ToastContainer autoClose={3000} position={"right"} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/detail" element={< Detail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/edit-profile" element={< EditProfile />} />
            <Route path="/addUser" element={< AddUser />} />
            {/* <Route path="/addUser" element={< AddUser />} /> */}
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
