import { useEffect, useState } from "react";

export default function BuscandoDados() {

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div key={tarefa.id}>
                <li>{tarefa.title} { tarefa.completed ? <strong>(Tarefa concluída)</strong> : null}</li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
