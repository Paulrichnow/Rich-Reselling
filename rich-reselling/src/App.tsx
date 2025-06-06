import  { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
  fetch("http://localhost:5001/api/richreselling/ping") // or 5001 if HTTPS
    .then((res) => res.json())
    .then((data) => {
      console.log("Response from backend:", data);
    })
    .catch((err) => {
      console.error("Error calling backend:", err);
    });
}, []);

return <div>Hello World</div>
}

export default App;
