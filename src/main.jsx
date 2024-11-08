import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <GoogleOAuthProvider clientId="1072974891186-uf14adi6c93bed8v005g6podmebfruk8.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>,
  </StrictMode>
  </BrowserRouter>,
)
