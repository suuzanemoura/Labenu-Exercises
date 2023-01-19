import React from "react";
import { Nav } from "../Nav/Nav";
import { CardVideo } from "../CardVideo/CardVideo";
import { MainStyle } from "./style";
import { VideoPanel } from "./style";

export function Main () {

  const cardsVideos = [
    {
      img: "https://picsum.photos/400/400?a=1",
      title: "Esse é o vídeo 01",
      userImg: "https://i.pravatar.cc/30",
      userName: "Usuário 01"
    },
    {
      img: "https://picsum.photos/400/400?a=2",
      title: "Esse é o vídeo 02",
      userImg: "https://i.pravatar.cc/40",
      userName: "Usuário 02"
    },
    {
      img: "https://picsum.photos/400/400?a=3",
      title: "Esse é o vídeo 03",
      userImg: "https://i.pravatar.cc/50",
      userName: "Usuário 03"
    },
    {
      img: "https://picsum.photos/400/400?a=4",
      title: "Esse é o vídeo 04",
      userImg: "https://i.pravatar.cc/60",
      userName: "Usuário 04"
    },
    {
      img: "https://picsum.photos/400/400?a=5",
      title: "Esse é o vídeo 05",
      userImg: "https://i.pravatar.cc/70",
      userName: "Usuário 05"
    },
    {
      img: "https://picsum.photos/400/400?a=6",
      title: "Esse é o vídeo 06",
      userImg: "https://i.pravatar.cc/80",
      userName: "Usuário 06"
    },
    {
      img: "https://picsum.photos/400/400?a=7",
      title: "Esse é o vídeo 07",
      userImg: "https://i.pravatar.cc/90",
      userName: "Usuário 07"
    },
    {
      img: "https://picsum.photos/400/400?a=8",
      title: "Esse é o vídeo 08",
      userImg: "https://i.pravatar.cc/100",
      userName: "Usuário 08"
    }
  ]
      

    return (
        <MainStyle>
          <Nav />
          <VideoPanel>
            { cardsVideos.map((item, key) => {
                return (
                  <CardVideo key={key}
                  title={item.title}
                  img={item.img}
                  user={item.userName}
                  userImg={item.userImg}
                  />
                )
              })
            }
          </VideoPanel>
        </MainStyle>
    )
}