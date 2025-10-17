import { useState } from 'react';
import './App.css'

function App() {
   const [a, ustawA] = useState(0);
   const A = (event) => {
      ustawA(event.target.value);
   }
   const [b, ustawB] = useState(0);
   const B = (event) => {
      ustawB(event.target.value);
   }
   let [wynik, ustawWynik] = useState(null);
   function obliczenia(znak){
    document.getElementById('wynik').style.color = 'black';
      switch(znak){
        case '+':
          ustawWynik(1*a + 1*b);
          break;
        case '-':
          ustawWynik(a - b);
          break;
        case '*':
          ustawWynik(a * b);
          break;
        case '/':
          if(1*b === 0){
            document.getElementById('wynik').style.color = 'red';
            ustawWynik('Nie dziel przez 0!');
            break;
          }
          ustawWynik(a / b);
          break;
        case '%':
          if(1*b === 0){
            document.getElementById('wynik').style.color = 'red';
            ustawWynik('Nie dziel przez 0!');
            break;
          }
          ustawWynik(a % b);
          break;
        case '**':
          ustawWynik(a ** b);
          break;
        default:
          ustawWynik(null);
      }
      
   }
   function Resetuj(){
        ustawA(0);
        ustawB(0);
        ustawWynik(null);
        document.getElementById('wynik').style.color = 'black';
      }

  return (
    <>
    <h1>Kalkulator</h1>
      <form action="">
        <input type="number" name="A" id="A" onChange={A} value={a}/>
        <input type="number" name="B" id="B" onChange={B} value={b}/>
      </form>
      <button type="button" onClick={() => obliczenia("+")}>+</button>
        <button type="button" onClick={() => obliczenia("-")}>-</button>
        <button type="button" onClick={() => obliczenia("*")}>*</button>
        <button type="button" onClick={() => obliczenia("/")}>/</button>
        <button type="button" onClick={() => obliczenia("%")}>%</button>
        <button type="button" onClick={() => obliczenia("**")}>**</button>
        <h2 id='wynik'>Wynik: {wynik}</h2>
        <br />
        <button type="button" onClick={Resetuj}>Resetuj</button>
    </>
  )
}

export default App
