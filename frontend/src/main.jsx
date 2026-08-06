import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { AuthProvider } from "@/context/AuthContext";
import { ChatProvider } from "@/context/ChatContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ChatProvider>
        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </ChatProvider>
    </AuthProvider>
  </StrictMode>
);