import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import IconPage from "./pages/IconsPage"; // Importa a página de ícones

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/icons" element={<IconPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


