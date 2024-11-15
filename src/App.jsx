import { Route, Routes } from "react-router-dom"

import './App.css'

import HomePage from './assets/components/HomePage'
import ProjectOnePage from './assets/components/ProjectOnePage' 
import ProjectTwoPage from './assets/components/ProjectTwoPage'
import ProjectThreePage from "./assets/components/ProjectThreePage"
import Info from "./assets/components/Info"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/p1" element={<ProjectOnePage />} />
        <Route path="/p2" element={<ProjectTwoPage />} />
        <Route path="/p3" element={<ProjectThreePage />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App