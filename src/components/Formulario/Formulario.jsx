import React, { Component } from "react"
import "../Formulario/style.css"

export default class Formulario extends Component{

    constructor(props){
        super(props);
        this.titulo="";
        this.nota="";
        this.categoria="Sem categoria";
    }
    _hadleMudançaDeCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleMudancaDeTitulo(evento) {
        this.titulo = evento.target.value;
        evento.stopPropagation();
    }

    _handleMudancaTexto(evento){
        this.texto = evento.target.value;
        evento.stopPropagation();
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo,this.texto,this.categoria);        
    }
    
    render(){
        return(
            <section >
            <form className="formulario"
            onSubmit={this._criarNota.bind(this)}
            >   <p>Categorias:</p>
                <select 
                onChange={this._hadleMudançaDeCategoria.bind(this)}
                className="formulario_input">
                    {this.props.categorias.map((categoria) => {
                        return <option>{categoria}</option>
                    })}
                    <option>Sem categoria</option>
                </select>
                <input type="text" placeholder="Título" className="formulario_title"
                onChange={this._handleMudancaDeTitulo.bind(this)}/>

                <textarea rows={10} placeholder="Escreva aqui..." className="formulario_textarea"
                onChange={this._handleMudancaTexto.bind(this)}/>

                <button className="formulario_btn">Criar nota</button>
            </form>
        </section>
        )
    }
}

