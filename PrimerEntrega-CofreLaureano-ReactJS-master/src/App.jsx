//Importo componentes
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {

  return (
    <>
      <NavBar />      
      <ItemListContainer
        id = "ccr-01"
        titulo = "Creedence Clearwater Revival"
        imagen = "./assets/img/ccr/01.jpg"
        banda = "Creedence Clearwater Revival"
/*         categoria = {
            nombre = "Creedence Clearwater Revival"
            id = "creedence" } */
        precio = '1000'
      />

      <ItemListContainer
        nombre = "Producto 2"
        desc = "Instrumento"
        madera = "Maple"
        precio = "130000"
      />
      <ItemListContainer
        nombre = "Producto 3"
        desc = "Instrumento"
        madera = "Maple"
        precio = "140000"
      />
      <ItemListContainer
        nombre = "Producto 4"
        desc = "Instrumento"
        madera = "Maple"
        precio = "150000"
      />
      <ItemListContainer
        nombre = "Producto 5"
        desc = "Instrumento"
        madera = "Maple"
        precio = "210000"
      />

    </>
  )
}


export default App
