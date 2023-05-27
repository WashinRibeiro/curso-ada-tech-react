import BuscandoDados from "./components/BuscandoDados";
import MeuBotao from "./components/MeuBotao";
import MeuComponente from "./components/MeuComponente";
import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";

function App() {
  return (
    <div>
      {/* Aula 02 - Olá mundo em React */}
      <h1>Olá Mundo, React!</h1>

      {/* Aula 03 - Componentes e props */}
      <MeuComponente/>
      <MeuBotao conteudo='me clique'/>
      <MeuBotao conteudo='depois aqui'/>
      <MeuBotao conteudo='e por fim aqui'/>

      {/* Aula 04 - Estados e eventos */}
      {/* Aula 05 - Renderização condicional */}
      <MeuContador/>

      {/* Aula 06 - Listas e chaves */}
      {/* Aula 07 - Efeitos colaterais */}
      <MinhaLista/>

      {/* Aula 08 - Buscando dados com fetch */}
      <BuscandoDados/>
    </div>
  );
}

export default App;
