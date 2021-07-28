import React from "react"
import "../Formulario/style.css"
const Formulario = () => {
    return(
        <section >
            <form className="formulario">
                <input type="text" placeholder="Título" className="formulario_title"/>
                <textarea rows={10} placeholder="Escreva aqui..." className="formulario_textarea"/>
                <button className="formulario_btn">Criar nota</button>
            </form>
        </section>
    )
}

export default Formulario