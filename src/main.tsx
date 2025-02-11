import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "@/components/ui/provider"

import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>
    </Provider>
  </StrictMode>,  
)
