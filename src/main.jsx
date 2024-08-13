import './styles.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'

import App from './App'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <StrictMode>

    <App />
    <div className="experience">
      <Canvas shadows={true} camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Experience />
      </Canvas>
    </div>

  </StrictMode>
)