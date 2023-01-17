import React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main"
import { Footer } from "./components/Footer";

export default function App() {
  return (
      <div className="tela-inteira">
        <Header />
        <Main />
        <Footer />
      </div>
  );
}
