import MeuBotao from "./components/MeuBotao";
import MeuComponente from "./components/MeuComponente";
import MeuContador from "./components/MeuContador";

function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente/>

      <MeuBotao conteudo='me clique'/>
      <MeuBotao conteudo='depois aqui'/>
      <MeuBotao conteudo='e por fim aqui'/>

      <MeuContador></MeuContador>
    </div>
  );
}

export default App;
