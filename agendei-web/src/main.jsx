import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Rotas from "./routes/routes";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(<Rotas />);
