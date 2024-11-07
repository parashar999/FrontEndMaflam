import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <GoogleOAuthProvider clientId="89742822953-u22bjk2i749225pnu1e0tb3237h7pbik.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>,
  </StrictMode>
  </BrowserRouter>,
)
