import React from "react";
import { Nav } from "./Nav";
import { CardVideo } from "./CardVideo";

export function Main () {
    return (
        <main>
          <Nav />
          <section className="painel-de-videos">
            
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />

          </section>
        </main>
    )
}