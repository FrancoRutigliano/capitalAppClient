import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import './index.css'
import App from './App.tsx'
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/themes/md-dark-indigo/theme.css"

import 'primeicons/primeicons.css';
        
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <PrimeReactProvider>
    <App />
     </PrimeReactProvider>
  </StrictMode>,
)
