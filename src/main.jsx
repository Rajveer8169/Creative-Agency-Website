import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/stairs'
import Context from './context/Context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stairs>
      <Context>
        <App/>
      </Context>
    </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
