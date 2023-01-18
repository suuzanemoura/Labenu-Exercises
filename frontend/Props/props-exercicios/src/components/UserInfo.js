import React from "react";

export function UserInfo (props) {

    return (
        <div className="userInfo">
            <img src={props.infos.imageUser} />
            <p>{props.infos.nameUser}</p>
        </div>
    )
}