import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LicePoper from "./components/LicePoper/LicePoper";
import MollyToken from "./components/matns/mollyToken";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/licepoper/*" element={<LicePoper />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
