import React, { StrictMode } from "react"
import{createRoot} from "react-dom/client"
import App from "./App"
import ContextApi from "./ContextApi/ContextApi"
import { BrowserRouter } from "react-router"

createRoot(document.getElementById("root")).render(
<StrictMode>  <ContextApi>
<App />
</ContextApi></StrictMode>
   


)