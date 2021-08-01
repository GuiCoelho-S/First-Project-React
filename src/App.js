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
      notas:[],
      categorias:[],
    }
  }
  criarNota(titulo,texto, categoria) {
    const novaNota = {titulo,texto, categoria};
    const novoArrayDeNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayDeNotas,
    }
    this.notas.push(novaNota);
    this.setState(novoEstado)
    
  }

  deletarNota (index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas})
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayDeCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayDeCategorias};
    this.setState(novoEstado)
  }
  render(){
    
    return (
    <section className="container_main">
    <Formulario 
    categorias={this.state.categorias}
    criarNota={this.criarNota.bind(this)}/>
    <main className="main">
      <h2 className="categorias">Categorias criadas:</h2>
      <ListaDeCategorias
      adicionarCategoria={this.adicionarCategoria.bind(this)}
      categorias={this.state.categorias}/>
      <ListaDeNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
    </main>
      
    </section>
  ); 
}
}

export default App;