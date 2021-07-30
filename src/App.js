import  React, { Component } from "react"
import  Formulario  from "./components/Formulario/";
import  ListaDeNotas  from './components/ListaDeNotas/';
import  ListaDeCategorias from "./components/ListaDeCategorias";
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

  deletarNota (index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas})
  }
  render(){
    
    return (
    <section className="container_main">
    <Formulario criarNota={this.criarNota.bind(this)}/>
    <main className="main">
      <h2 className="categorias">Categorias criadas:</h2>
      <ListaDeCategorias/>
      <ListaDeNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
    </main>
      
    </section>
  ); 
}
}

export default App;