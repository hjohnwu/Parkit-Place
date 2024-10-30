import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import { Home } from "./pages/home";
import { About } from "./pages/about";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*}<Route path="*" element={<NotFound />} /> {/* For unmatched routes */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
