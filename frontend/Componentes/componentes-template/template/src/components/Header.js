import React from "react";
import logo from "../img/logo.png";

export function Header () {
    return(
        <header>
            <img src={logo} />
            <h1>Aula - Componentes React</h1>
        </header>
    )
}