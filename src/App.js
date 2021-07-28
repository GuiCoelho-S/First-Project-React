import  React from "react"
import  Formulario  from "./components/Formulario/";
import  ListaDeNotas  from './components/ListaDeNotas/';
import "../src/components/style_main/style.css"
import "./assets/index.css"

function App() {
  return (
    <section className="container_main">
    <Formulario/>
    <ListaDeNotas/>
    </section>
  ); 
}

export default App;