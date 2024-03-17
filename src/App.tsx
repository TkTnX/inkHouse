import { Header } from "./components/Header/Header";
import { Reproductions } from "./components/Reproductions/Reproductions";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <>
      <Header />

      <main>
        <Title />
        <Reproductions />
      </main>
    </>
  );
}

export default App;
