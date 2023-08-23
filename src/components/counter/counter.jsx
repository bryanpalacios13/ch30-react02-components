import { useState } from "react";

export const Counter = () => {
    console.log("Estoy dentro del componente Counter");
    /* let counterValue = 100;
    const counterValueInitial = counterValue; */

    const[ counterValue, setCounter ] = useState (100);

    const handleIncrement = (event) => {
        // console.log(event)
        console.log("Estoy en la función Incremento");
        setCounter(counterValue + 1)
        console.log("contador: " + counterValue)
    };
    
    const handleDecrement = (e) => {
        // console.log(e)
        console.log("Estoy en la función Decremento");
        setCounter(counterValue - 1)
        console.log("contador: " + counterValue)
    };

   /*  const reset = () => {
        counterValue = counterValueInitial;
        console.log("contador: " + counterValue);
    } */
    
  return (
    <>
    <p>Contador: {counterValue}</p>
    <button onClick={ handleDecrement }>Decrementar</button>
    <button onClick={ handleIncrement }>Incrementar</button>
    <button onClick={ () => setCounter(100) }>Resetear</button>
    </>
  )
}
