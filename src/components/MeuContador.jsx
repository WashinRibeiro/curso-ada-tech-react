import { useState } from "react";

export default function MeuContador() {
  
    const [cont, setCont] = useState(0)

    function aumentar() {
        setCont(cont + 1);
    }

  return (
    <div>
        <h1>Meu contador</h1>
        <h3>{cont}</h3>
        <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}
