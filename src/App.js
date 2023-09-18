import Login from "./Login";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  
  return (
    
    <div>
       <Header/>
      <Home/>
       <Footer/>
    </div>
   
  );
}

export default App;
