import { useState } from "react";

export default function MeuContador() {
  const [cont, setCont] = useState(0);

  function aumentar() {
    setCont(cont + 1);
  }

  function diminuir() {
    setCont(cont - 1);
  }

  if (cont > 5) {
    return (
      <div>
        <h1>Valor muito alto!</h1>
        <button onClick={diminuir}> Diminuir </button>
        <button onClick={aumentar}> Aumentar </button>
      </div>
    )
  }

  return (
    <div>
      <h1>Meu contador: {cont}</h1>
      <button onClick={diminuir}> Diminuir </button>
      <button onClick={aumentar}> Aumentar </button>
    </div>
  );
}
