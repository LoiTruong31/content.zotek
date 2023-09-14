import Login from "./Login";
import TimeSheet from "./components/TimeSheet";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
