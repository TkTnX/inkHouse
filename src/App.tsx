import React from "react";
import { Collection } from "./components/Collection/Collection";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Reproductions } from "./components/Reproductions/Reproductions";
import { Team } from "./components/Team/Team";
import { Title } from "./components/Title/Title";

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Title />
        {/* // TODO СДЕЛАТЬ ПЛАВНОЕ ПОЯВЛЕНИЕ МЕНЮ В ХЕДЕРЕ (УБРАТЬ КОСТЫЛИ)  */}
        <Reproductions />
        <Collection />
        <Team />
      </main>

      <Footer />
    </>
  );
};
