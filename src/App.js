import logo from './logo.svg';
import './App.css';
import Home from "./Home.js"
import  Cards from "./Card.js"
import  Navbar from "./Nav/myNavBar.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path = "/" element= {<Home/>}> </Route>
        <Route path = "/cards" element={<Cards/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
