import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FormularioAPP } from "./FormularioAPP.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormularioAPP />
  </StrictMode>
);
