import React, { Component } from 'react';
import "./style.css"

export default class CardNotas extends Component{
    render(){
        return(
        <section className = "card-nota">
            <header>
                <h2 className="card-nota_title">{this.props.titulo}</h2>
            </header>
            <p className="card-nota_text">{this.props.texto}</p>
        </section>)
    }
} 