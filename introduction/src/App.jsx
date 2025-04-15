import Card from "./components/Card"
import './App.css'

function App() {
  const items = ["React", "JavaScript", "Vite"];

  // sintaxis JSX 
  return (
    <section>
      <div>¡Hola Mundo!</div>
      <Card title="Card 1" description="Esto es una descripción" />
      <Card title="Card 2" description="Esto es otra descripción" />
      <Card title="Card 3" description="Tercera descripción" />
      <ul>
        {
          items.map( (item, index) => (<li key={index}>{item}</li>) )
        }
      </ul>
    </section>   
  )
}

export default App