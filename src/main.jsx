import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sejarah from "./components/Sejarah.jsx";
import Geografis from "./components/Geografis.jsx";
import Wisata from "./components/Wisata.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="sejarah" element={<Sejarah />} />
          <Route path="geografis" element={<Geografis />} />
          <Route path="wisata" element={<Wisata />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
