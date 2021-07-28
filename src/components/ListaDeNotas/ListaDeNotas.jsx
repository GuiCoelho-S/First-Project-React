import React from "react"
import  CardNota  from "../CardNota"
import "./style.css"
const ListaDeNotas = () => {
    return (
        <ul className="container-notas">
            {Array.of("Trabalho","Trabalho","Estudos",1,1,1,1,1,1,1,1,1,1).map((categoria, index) => {
                return (
                    <li key={index} className="container-notas_item">
                        
                        <CardNota/>
                    </li>  
                );
            })}
                         
        </ul>
    )
}
export default ListaDeNotas