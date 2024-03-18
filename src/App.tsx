import React, { useState } from "react";
import { Collection } from "./components/Collection/Collection";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Reproductions } from "./components/Reproductions/Reproductions";
import { Team } from "./components/Team/Team";
import { Title } from "./components/Title/Title";

export const App: React.FC = () => {
  const [openCart, setOpenCart] = useState(false)

  return (
    <>
      <Header setOpenCart={setOpenCart} openCart={openCart} />

      <main>
        <Title setOpenCart={setOpenCart} openCart={openCart} />
        <Reproductions />
        <Collection />
        <Team />
      </main>

      <Footer />
    </>
  );
};
