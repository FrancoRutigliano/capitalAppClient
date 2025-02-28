import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'primereact/button';         
import TemplateDemo from './components/Menubar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TemplateDemo />
      <h1 className=''>Hola </h1>
    </>
  )
}

export default App
