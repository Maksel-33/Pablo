import { useState } from 'react';
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const parzysta = count % 2 === 0 ? 'parzysta' : 'nieparzysta';
    const Dodaj = (event) => {
        setStep(event.target.value);
    }

  return (
    <>
     <h1>Licznik: {count}</h1>
     <h2>Liczba jest {parzysta}</h2>
     <button type="button" onClick={() => setCount((count) => count-(-step))}>Dodaj {step}</button>
     <button type="button" onClick={() => setCount((count) => count-(1))} disabled={count === 0}  >odejmij jeden</button>
     <button type="button" onClick={() => setCount((count) => count=(0))}>Resetuj</button>
     <form action="">
      <h2>O ile chcesz zwiększyć licznik?</h2>
      <input type="number" placeholder='wpisz liczbe' min='1' value={step} onChange={Dodaj}/>
     </form>
   
      
    </>
  )
}

export default App
