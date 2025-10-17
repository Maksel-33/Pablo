import { useState } from 'react'
import './App.css'

function App() {
  function zmienTlo()
  {
    document.body.classList.toggle("light");
  }
  var K;
  function kolorPudla(Kolor)
  {
    switch (Kolor) {
      case "Czerwony":
        K = "rgb(255, 72, 72)"
      break;
      case "Niebieski":
        K = "rgb(66, 119, 180)" 
      break;
      case "Zielony":
        K = "rgba(111, 209, 91, 1)" 
      break;
      case "Zolty":
        K = "rgb(219, 171, 12)" 
      break;
    }
    document.getElementById("pudlo").style.backgroundColor = K;
  }

  return (
    <>
      <h1>Coś</h1>
      <button type="button" onClick={zmienTlo}>Zmień tło</button>
      <box id="pudlo">Pudełko</box>
      <button type="button" onClick={() => kolorPudla("Czerwony")}>Czerwony</button>
      <button type="button" onClick={() => kolorPudla("Niebieski")}>Niebieski</button>
      <button type="button" onClick={() => kolorPudla("Zielony")}>Zielony</button>
      <button type="button" onClick={() => kolorPudla("Zolty")}>Zółty</button>
    </>
  )
  
}


export default App
