import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import frutaria from "../frutaria.json";
import Cadastro from "../Pages/Cadastro";

export default function Router() {
  const [carrinho, setCarrinho] = useState([]);
  const [frutas, setFrutas] = useState(frutaria.frutaria);
  console.log(frutas);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Mercadinho
              frutas={frutas}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          }
        />
        <Route
          path="/cart"
          element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />}
        />
        <Route
          path="/register"
          element={<Cadastro frutas={frutas} setFrutas={setFrutas} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
