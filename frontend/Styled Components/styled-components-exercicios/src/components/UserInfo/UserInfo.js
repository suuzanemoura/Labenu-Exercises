import React from "react";
import { UserImg, UserInfoStyle } from "./style";

export function UserInfo (props) {

    return (
        <UserInfoStyle>
            <UserImg src={props.userImg} />
            <p>{props.user}</p>
        </UserInfoStyle>
    )
}