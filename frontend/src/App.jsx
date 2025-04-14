import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EmployeeManagementApp from "./Components/EmployeeManagementApp.jsx";
import EmployeeDetails from "./Components/EmployeeDetails.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";

function App() {
  return (
    <div>
      console.log("Hello world");
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
