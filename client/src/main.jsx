import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3500,
            style: {
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
              fontSize: "0.8em",
            },
          }}
        />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
