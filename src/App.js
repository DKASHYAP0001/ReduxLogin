import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/pages/Home";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
