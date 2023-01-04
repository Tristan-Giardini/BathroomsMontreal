import ReactDOM from "react-dom/client";
import App from "./App";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { MobileProvider } from "./MobileContext";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MobileProvider>
    <App />
  </MobileProvider>
);
