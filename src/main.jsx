import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.css'
import App from './App.jsx'

// --- GLOBAL GSAP CONFIGURATION ---
gsap.registerPlugin(ScrollTrigger);

// 1. Normalize Scroll: Forces GSAP to sync with Lenis smooth scroll 
// effectively across all touch and desktop devices.
ScrollTrigger.normalizeScroll(true);

// 2. Performance Config: Prevents mobile "address bar jumps" from 
// triggering unnecessary re-renders or animation jitters.
ScrollTrigger.config({
  ignoreMobileResize: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)