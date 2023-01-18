import React from "react";
import { UserInfo } from "./UserInfo";

export const CardVideo = (props) => {

    function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
    }

    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.card.image} alt="" />
            <h4>{props.card.titulo}</h4>
            <UserInfo infos={props.card}/>
        </div>
    )
}