import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./Auth/AuthContext.jsx";
import MarketLayout from "./Layout/MarketLayout.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MarketLayout>
          <App />
        </MarketLayout>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
