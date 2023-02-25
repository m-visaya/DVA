import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import File from "./File";
import Live from "./Live";
import Logs from "./Logs";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/file" element={<File />} />
      <Route path="/live" element={<Live />} />
      <Route path="/logs" element={<Logs />} />
    </Routes>
  </BrowserRouter>
);
