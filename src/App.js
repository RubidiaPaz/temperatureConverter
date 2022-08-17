import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);
  

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    
      setCelsius(total);
      setFahrenheit((total*9/5)+32);
      setKelvin((tipo*total + 273.15 ));
    
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Temperaturas</h1>

      <p>Grados Celsius: {celsius}</p>
      <p>Grados Fahrenheit: {fahrenheit}</p>
      <p>Grados Kelvin: {kelvin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
      <option value={0}>Grados Celsius</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;