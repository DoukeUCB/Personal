import { useState, type JSX } from 'react'
import './App.css'

export default function App(): JSX.Element {
  const [oddList, setOdd] = useState<number[]>([]);
  const [evenList, setEven] = useState<number[]>([]);
  const [numberInput, setNumber] = useState<number>(0);

  function checkTypeNumber(number: number): void {
    if (number % 2 === 0) {
      setEven([...evenList, number]);
    } else {
      setOdd([...oddList, number]);
    }
  }

  function validateDuplicatedNumber(number: number): boolean {
    if (oddList.includes(number) || evenList.includes(number)) {
      alert('El número ya ha sido ingresado');
      return true;
    }
    return false;
  }

  function validateRangeNumbers(number: number): boolean {
    if (number < 0 || number > 100) {
      alert('El número debe estar entre 0 y 100');
      return true;
    }
    return false;
  }

  function validateEmptyList(): void {
    if (oddList.length === 0) {
      alert('No hay números impares');
    }
    if (evenList.length === 0) {
      alert('No hay números pares');
    }
  }

  function manageChange(e:React.ChangeEvent<HTMLInputElement>): void {
    setNumber(Number(e.target.value));
  }

  const addNumberToList = (): void => {
      if (validateDuplicatedNumber(numberInput) || validateRangeNumbers(numberInput)) {
        setNumber(0);
        return;
      }
      checkTypeNumber(numberInput);
      setNumber(0);
  }

  return (
    <div className="App">
      <h1>Clasificador de numeros</h1>
        <input
        type="number"
        placeholder="0"
        onChange={manageChange}
        />
      <button onClick={addNumberToList}>
        Agregar
      </button>

      <h2>Numeros Pares</h2>
      {evenList.length === 0 ? (
        <h3>No hay numeros pares</h3>
      ) : (
        <ul>
          {
            evenList.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      )}

      <h2>Numeros Impares</h2>
      {oddList.length === 0 ? (
        <h3>No hay numeros impares</h3>
      ) : (
        <ul>
          {
            oddList.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      )}
    </div>
  )
}
