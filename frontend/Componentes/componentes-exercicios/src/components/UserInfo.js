import React from "react";

export function UserInfo () {

    const userName = "Autor do vídeo"

    return (
        <div className="userInfo">
            <img src="https://picsum.photos/100/100?a=10" />
            <p>{userName}</p>
        </div>
    )
}