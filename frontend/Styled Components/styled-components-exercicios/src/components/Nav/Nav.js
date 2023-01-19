import React from "react";
import { NavStyle } from "./style";

export function Nav () {
    return(
        <NavStyle>
            <ul>
              <li>Início</li>
              <li>Em alta</li>
              <li>Inscrições</li>
              <hr />
              <li>Originais</li>
              <li>Histórico</li>
            </ul>
          </NavStyle>
    )
}