import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <>
    <StrictMode>
      <Main />
    </StrictMode>
  </>
);
