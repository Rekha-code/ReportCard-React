import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReportCard from './components/ReportCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h3> Student Report Card</h3>
      <ReportCard/>
    </>
  )
}

export default App
