
import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { AuthProvider } from './Components/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
