import  React, { Component } from "react"
import  Formulario  from "./components/Formulario/";
import  ListaDeNotas  from './components/ListaDeNotas/';
import "../src/components/style_main/style.css"
import "./assets/index.css"


class App extends Component {

  constructor(){
    super();
    this.notas = [];
    this.state = {
      notas:[]
    }
  }
  criarNota(titulo,texto) {
    const novaNota = {titulo,texto};
    const novoArrayDeNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayDeNotas
    }
    this.notas.push(novaNota);
    this.setState(novoEstado)
    
  }
  render(){
    
    return (
    <section className="container_main">
    <Formulario criarNota={this.criarNota.bind(this)}/>
    <ListaDeNotas notas={this.state.notas}/>
    </section>
  ); 
}
}

export default App;