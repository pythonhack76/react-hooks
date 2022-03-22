import React, { useState, useEffect, useCallback, useMemo} from 'react';

import './App.css';


/*

Regole per la gestione degli Hooks

*/

function MioComponente() {

  const [numeri, setNumeri] = useState([]);

  //inserisco hook useEffect

  useEffect(() => {

    fetch("/numeri.json")
    .then((resp) => resp.json())
    .then((data) => {
      setNumeri(data);
    });

  }, []);


  const addOne = useCallback(() => {
    setNumeri((currentNumeri) => [ ...currentNumeri, currentNumeri.length + 1, 
    ]);
  }, []);

  const addTwo = useCallback(() => {
    setNumeri((currentNumeri) => [ ...currentNumeri, currentNumeri.length + 2, 
    ]);
  }, []);

  //const sum = numeri.reduce((a, v) => a + v, 0);
  const sum = useMemo(() => numeri.reduce((a, v) => a + v, 0), []);

  return (
    <div>
      <div>Numeri: {JSON.stringify(numeri)}</div>
      <div>Somma: { sum } </div>
      <button onClick={addOne}>Aggiungi uno</button>
      <button onClick={addTwo}>Aggiungi due</button>
    </div>
  );

}



function App() {
  return (
    <div className="App">
      <MioComponente />
    </div>
  );
}

export default App;
