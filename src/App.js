import logo from './logo.svg';
import './App.css';
import Home from "./Home.js"
import  Cards from "./Cards.js"
import  Navbar from "./Nav/myNavBar.js"
import  Contact from "./Contact.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path = "/" element= {<Home/>}> </Route>
        <Route path = "/Cards" element={<Cards/>}></Route>
        <Route path ="/Contact"element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
