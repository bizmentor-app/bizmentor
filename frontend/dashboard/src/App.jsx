import { useState } from 'react'
import WelcomeCard from './components/WelcomeCard'
import './App.css'

function App() {
  return (
    <div>
      <h1>BizMentor Dashboard</h1>
      <WelcomeCard businessName="Acme Corp" />
    </div>
  )
  
}

export default App
