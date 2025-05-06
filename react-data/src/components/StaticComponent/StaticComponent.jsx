const StaticComponent = () => {
  const items = ["Manzana", "Banana", "Cereza", "Uva"];

  return (
    <ul>            
      {
        items.map( (item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  )
}

export default StaticComponent;