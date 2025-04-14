import Card from "./componentes/Card"
import './App.css'

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>¡Hola Mundo!</h1>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default App