// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './sections/home/Home'
import TimelineComponent from './sections/timeline/Timeline'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HomeComponent />
      <TimelineComponent />
    </>
  )
}

export default App
