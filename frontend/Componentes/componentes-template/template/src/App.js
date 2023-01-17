import React from "react";
import "./App.css";
import { Garagem } from "./components/Garagem.js"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {

  return (
    <div className="App">
    <Header />
    <Garagem />
    <Footer />
    </div>
  );
}
