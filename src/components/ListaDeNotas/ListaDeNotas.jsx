import React, { Component } from "react"
import  CardNota  from "../CardNota"
import "./style.css"

export default class ListaDenotas extends Component {


    render(){
        return(
            <section className="notas">
            <ul className="container-notas">
            {this.props.notas.map((nota, index) => {
                return (
                    <li key={index} className="container-notas_item">
                        
                        <CardNota 
                            indice={index}
                            apagarNota={this.props.apagarNota}
                            titulo={nota.titulo} 
                            texto={nota.texto}
                            categoria={nota.categoria}/>

                    </li>  
                );
            })}
                         
        </ul>
        </section>
        )
    }
}
