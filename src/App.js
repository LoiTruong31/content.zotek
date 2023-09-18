import Login from "./Login";
import TimeSheet from "./TimeSheet";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="timesheet" element={<TimeSheet />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
