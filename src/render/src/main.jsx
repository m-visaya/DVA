import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import File from "./File";
import Live from "./Live";
import Logs from "./Logs";
import Config from "./Configuration";
// import Preview from "./Preview";
import Help from "./Help";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route key="dashboard" exact path="/" element={<Dashboard />} />
      <Route key="file" path="/file" element={<File />} />
      <Route key="live" path="/live" element={<Live />} />
      <Route key="logs" path="/logs" element={<Logs />} />
      {/* <Route key="preview" path="/preview" element={<Preview />} /> */}
      <Route key="config" path="/config" element={<Config />} />
      <Route key="help" path="/help" element={<Help />} />
    </Routes>
  </HashRouter>
);