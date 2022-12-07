import './App.css'
import React from 'react'

import Importa from "./componets/um"
import ImParametro from './componets/parametros'
import ImFilhos from './componets/filhos'
import ImCarta from './componets/layout/carta'
import ImRepeticao from './componets/Repeticao'
import ImCondicao from './componets/Condicional'
import ImCondicaoIf from './componets/CondicionalComIf'

export default props => (
  <div className="App">
      <ImCarta titulo="#1 - Componente">
        <Importa/>
      </ImCarta>

      <ImCarta titulo="#2 - Componente com parametro">
        <ImParametro titulo="Vai Silão, não para não" sub="Muito bom"/>
        <ImParametro titulo="Uhuu !!" sub="Ihaaa !!"/>
      </ImCarta>

      <ImCarta titulo="#3 - Componente com filho">
        <ImFilhos>
          <ul>
            <li>Iris</li>
            <li>Carlos</li>
            <li>Maria</li>
            <li>Felipe</li>
          </ul>
        </ImFilhos>
      </ImCarta>

       <ImCarta titulo="#4 - Componente com objeto">
        <ImRepeticao></ImRepeticao>
      </ImCarta>

      <ImCarta titulo="#5 - Componente com condição V1">
       <ImCondicao numero={1/*prompt("digite um número")*/}></ImCondicao>
     </ImCarta>

     <ImCarta titulo="#6 - Componente com condição V2 (com If)">
      <ImCondicaoIf numero={2/*prompt("digite um número")*/}></ImCondicaoIf>
    </ImCarta>
  </div>
)
