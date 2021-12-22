import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Pages/Home";
import CadUser from "./Pages/CadUser";
import Login from "./Pages/Login";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import CadFilme from "./Pages/CadFilme";
import View from "./Pages/View";
import Edit from './Pages/EditFilm'

axios.defaults.baseURL = "https://streaming-api-1.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Navbar
      image="https://i.imgur.com/1Jn5k9O.jpg"
      altura="42px"
      largura="50px"
    />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caduser" element={<CadUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadfilm" element={<CadFilme />} />
        <Route path="/film/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
