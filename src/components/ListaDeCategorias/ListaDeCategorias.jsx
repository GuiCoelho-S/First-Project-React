import React, {Component} from 'react';
import "./style.css"
class ListaDeCategorias extends Component {
    
    render() { 
        return ( 
            <section className="container-lista">
                <p className="instruction"><center>Escreva a categoria que você deseja criar, depois pressione enter</center></p>
                <input className="listaCategoria_input" type="text"/>
                <ul className="container-listaCategoria">
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>
                </ul>
                
            </section>
        );
    }
}
 
export default ListaDeCategorias;