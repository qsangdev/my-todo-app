import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import "./i18next";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
