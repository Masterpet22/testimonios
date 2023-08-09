import React from "react";

function Testimonios(){
    return(
        <div className="contenedor">
            <img className="imagen" src={require("../imagenes/emma.png")} alt="foto"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">Emma Bostian en Suecia</p>
                <p className="cargo-testimonio">ingeniera de software</p>
                <p className="texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia iure quis vero sint voluptatibus repudiandae nihil provident necessitatibus deserunt delectus aut inventore quaerat atque quibusdam culpa ab, doloremque rerum?</p>
            </div>
        </div>
    )
}