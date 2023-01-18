import React from "react";
import { Nav } from "./Nav";
import { CardVideo } from "./CardVideo";

export function Main () {

  const cardVideo1 =
    {
      image: "https://picsum.photos/400/400?a=1",
      titulo: "Esse é o vídeo 01",
      imageUser: "https://picsum.photos/400/400?a=11",
      nameUser: "Usuário 01"
    }

  const cardVideo2 =
    {
      image: "https://picsum.photos/400/400?a=2",
      titulo: "Esse é o vídeo 02",
      imageUser: "https://picsum.photos/400/400?a=12",
      nameUser: "Usuário 02"
    }

  const cardVideo3 =
    {
      image: "https://picsum.photos/400/400?a=3",
      titulo: "Esse é o vídeo 03",
      imageUser: "https://picsum.photos/400/400?a=13",
      nameUser: "Usuário 03"
    }
  
  const cardVideo4 =
    {
      image: "https://picsum.photos/400/400?a=4",
      titulo: "Esse é o vídeo 04",
      imageUser: "https://picsum.photos/400/400?a=14",
      nameUser: "Usuário 04"
    }

  const cardVideo5 =
    {
      image: "https://picsum.photos/400/400?a=5",
      titulo: "Esse é o vídeo 05",
      imageUser: "https://picsum.photos/400/400?a=15",
      nameUser: "Usuário 05"
    }

  const cardVideo6 =
    {
      image: "https://picsum.photos/400/400?a=6",
      titulo: "Esse é o vídeo 06",
      imageUser: "https://picsum.photos/400/400?a=16",
      nameUser: "Usuário 06"
    }
  
  const cardVideo7 =
    {
      image: "https://picsum.photos/400/400?a=7",
      titulo: "Esse é o vídeo 07",
      imageUser: "https://picsum.photos/400/400?a=17",
      nameUser: "Usuário 07"
    }

  const cardVideo8 =
    {
      image: "https://picsum.photos/400/400?a=8",
      titulo: "Esse é o vídeo 08",
      imageUser: "https://picsum.photos/400/400?a=18",
      nameUser: "Usuário 08"
    }
      

    return (
        <main>
          <Nav />
          <section className="painel-de-videos">
            
            <CardVideo card={cardVideo1}/>
            <CardVideo card={cardVideo2}/>
            <CardVideo card={cardVideo3}/>
            <CardVideo card={cardVideo4}/>
            <CardVideo card={cardVideo5}/>
            <CardVideo card={cardVideo6}/>
            <CardVideo card={cardVideo7}/>
            <CardVideo card={cardVideo8}/>

          </section>
        </main>
    )
}