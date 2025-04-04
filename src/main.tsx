import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
// import '/public/css/bootstrap.min.css'
// import '/public/css/style.css'
// import '/public/lib/animate/animate.min.css'
// import '/public/lib/owlcarousel/assets/owl.carousel.min.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
