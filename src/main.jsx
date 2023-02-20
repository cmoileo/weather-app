import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { APIContextProvider } from "./Contexts/APIContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <APIContextProvider>
        <App />
    </APIContextProvider>
)
