import React, {Component} from 'react';
import "./style.css"
class ListaDeCategorias extends Component {

    _handleEventoINput (e){
        
        if(e.key === "Enter"){
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }
    render() { 
        
        return ( 
            <section className="container-lista">
                <p className="instruction"><center>Escreva a categoria que você deseja criar, depois pressione enter</center></p>
                <input className="listaCategoria_input" type="text"
                placeholder="Adicionar Categoria"
                onKeyUp={this._handleEventoINput.bind(this)}/>
                <ul className="container-listaCategoria">
                    {this.props.categorias.map((categoria, index) => {
                        return <li 
                        className="listaCategoria_item"
                        key={index}>{categoria}</li>
                    })}
                </ul>
                
            </section>
        );
    }
}
 
export default ListaDeCategorias;