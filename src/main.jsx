
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // 1. Import your App component
import './index.css'      // 2. Import your Tailwind styles

createRoot(document.getElementById('root')).render(
  <App /> // 3. Tell React to render the App component
)
