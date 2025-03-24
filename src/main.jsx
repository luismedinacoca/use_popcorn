import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./components/StarRating/StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <br />
    <StarRating maxRating={6} />
    <StarRating />
  </StrictMode>
);
