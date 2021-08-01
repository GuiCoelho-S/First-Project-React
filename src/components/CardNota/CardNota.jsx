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
                <h2 className="card-nota_title"><center>{this.props.titulo}</center></h2>
                <DeleteSVG onClick={this.apagar.bind(this)}/>
                
            </header>
            <h5><center>{this.props.categoria}</center></h5>
            <p className="card-nota_text">{this.props.texto}</p>
        </section>)
    }
} 