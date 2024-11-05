import { StrictMode } from "react";
import { App } from "./app";
import { createRoot } from "react-dom/client";
import { enableMSW } from "./api/mocks";

enableMSW().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
