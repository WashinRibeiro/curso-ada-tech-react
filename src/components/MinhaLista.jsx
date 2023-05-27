import { useEffect, useState } from "react";

const minhaLista = [
  { id: 1, value: "Fruta" },
  { id: 2, value: "Legumes" },
  { id: 3, value: "Carne" },
];

export default function MinhaLista() {

  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase())
      })
  
      setProdutos(novaLista)
    } else {
      setProdutos(minhaLista)
    }
  }, [pesquisa])

  return (
    <>
    <h1>Listas em React!</h1>
    <h2>Efeitos colaterais</h2>
    <input 
      type="text" 
      placeholder="Pesquise aqui..." 
      value={pesquisa} 
      onChange={(e) => setPesquisa(e.target.value)}
    />
    {produtos.map((item) => {
      return (
        <div key={item.id}>
          <h4> {item.value} </h4>
        </div>
      );
    })}
  </>
  )
}
