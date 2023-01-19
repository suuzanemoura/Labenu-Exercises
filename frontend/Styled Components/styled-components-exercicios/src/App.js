import React from "react";
import "./styles.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer";
import { GlobalStyled } from "./GlobalStyled";
import { Container } from "./GlobalStyled";

export default function App() {
  return (
    <Container>
        <GlobalStyled />
        <Header />
        <Main />
        <Footer />
    </Container>
  );
}
