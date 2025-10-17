import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ZslLogo from './assets/logo.svg'
import Ilo from './assets/Ilo.png'
import Zse from './assets/Energetyk.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <table>
          <tr>
            <td><a href="https://zse.edu.gdansk.pl/pl" target="_blank">
          <img src={Zse} className="logo" alt="Zse logo" /></a>
            </td>
            <td>Mikołaja Reja 25, 80-870 Gdańsk</td>
            <td><a href="https://zse.edu.gdansk.pl/pl" target="_blank">Strona szkoły</a></td>
          </tr>
          <tr>
            <td><a href="https://ilo.gda.pl " target="_blank">
          <img src={Ilo} className="logo ilo" alt="ilo logo" /></a>
            </td>
            <td>Wały Piastowskie 6, 80-855 Gdańsk</td>
            <td><a href="https://ilo.gda.pl" target="_blank">Strona szkoły</a></td>
          </tr>
          <tr>
            <td><a href="https://www.zsl.gda.pl" target="_blank">
          <img src={ZslLogo} className="logo zsl" alt="Zsl logo" /></a>
            </td>
            <td>Podwale Staromiejskie 51/52, 80-845 Gdańsk</td>
            <td><a href="https://www.zsl.gda.pl" target="_blank">Strona szkoły</a></td>
          </tr>
        </table>
        
        
      </div>
      <h1>Szkoły Gdańsk</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          twoje zakola mają {count} cm² 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
