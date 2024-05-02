import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import { CollapseProvider } from './context/collapseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <CollapseProvider>
        <App />
      </CollapseProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
