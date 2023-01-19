import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { VideoCard, VideoCardImg } from "./style";

export const CardVideo = (props) => {

    function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
    }

    return(
        <VideoCard onClick={reproduzVideo}>
            <VideoCardImg src={props.img} alt="" />
            <h4>{props.title}</h4>
            <UserInfo user={props.user} userImg={props.userImg}/>
        </VideoCard>
    )
}