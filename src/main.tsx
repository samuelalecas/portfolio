import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes/App.routes.tsx";
import { Provider } from "./contexts/App.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <HashRouter>
        <AppRoutes />
    </HashRouter>
  </Provider>
);
