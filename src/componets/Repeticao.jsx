import React from 'react'

import produtos from "../Data/Produtos.js"

export default props => {

  function pegarProdutos() {
      return produtos.map(prod => {
        return <li key={prod.id}>
          {prod.id} - {prod.nome} -> R$ {prod.preco}
        </li>
      })
  }

  return (
    <>
      <h1>Repetição</h1>
      <ul>
        {pegarProdutos()}
      </ul>
    </>
  )
}
