import Card from "./Card"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "../public/NavBar.jsx"

function App() {
  

  return (
    <>
      <NavBar />
      <h1>Welocome to Gari Mzuri</h1>
      <div className="card">
        <Card />
        <NavBar />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p>this is the footer</p>
      <NavBar />
    </>
  )
}

export default App
