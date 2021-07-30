import React, { Component } from 'react';
import "./style.css"
import {ReactComponent as DeleteSVG} from  "../../assets/images/Delete.svg"
export default class CardNotas extends Component{

    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }
    render(){
        return(
        <section className = "card-nota">
            <header className="card-nota_title--container">
                <h2 className="card-nota_title">{this.props.titulo}</h2>
                <DeleteSVG onClick={this.apagar.bind(this)}/>
            </header>
            <p className="card-nota_text">{this.props.texto}</p>
        </section>)
    }
} 