import { useState } from "react";
import styles from '../styles/button.module.css'

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
      <div className="container">
        <h1>Valor muito alto!</h1>
        <button className={styles.myButton} onClick={diminuir}> Diminuir </button>
        <button className={styles.myButton} onClick={aumentar}> Aumentar </button>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Meu contador: {cont}</h1>
      <button className={styles.myButton} onClick={diminuir}> Diminuir </button>
      <button className={styles.myButton} onClick={aumentar}> Aumentar </button>
    </div>
  );
}
