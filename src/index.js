import React from "react";
import App from "./App";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
import "./index.css";

root.render(<App />);
