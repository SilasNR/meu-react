import './App.css'
import React from 'react'

import Importa from "./componets/basicos/um"
import ImParametro from './componets/basicos/parametros'
import ImFilhos from './componets/basicos/filhos'
import ImCarta from './componets/layout/carta'
import ImRepeticao from './componets/basicos/Repeticao'
import ImCondicao from './componets/basicos/Condicional'
import ImCondicaoIf from './componets/basicos/CondicionalComIf'
import ImDireta from "./componets/comunicacao/direta/Pai"
import ImIndireta from "./componets/comunicacao/indireta/super"
import ImInput from './componets/form/Input'
import ImConta from './componets/contador/conta'

export default (props) => (
  <div className="App">
    <h1>Exercícios React</h1>
    <div className='Cards'>
      <ImCarta titulo="#1 - Componente" color="#FFBF00">
        <Importa/>
      </ImCarta>

      <ImCarta titulo="#2 - Componente com parametro" color="#0002A1">
        <ImParametro titulo="Vai Silão, não para não" sub="Muito bom"/>
        <ImParametro titulo="Uhuu !!" sub="Ihaaa !!"/>
      </ImCarta>

      <ImCarta titulo="#3 - Componente com filho" color="#3D5656">
        <ImFilhos>
          <ul>
            <li>Iris</li>
            <li>Carlos</li>
            <li>Maria</li>
            <li>Felipe</li>
          </ul>
        </ImFilhos>
      </ImCarta>

      <ImCarta titulo="#4 - Componente com objeto" color="#F06292">
        <ImRepeticao></ImRepeticao>
      </ImCarta>

      <ImCarta titulo="#5 - Componente com condição V1" color="#285430">
        <ImCondicao numero={1/*prompt("digite um número")*/}></ImCondicao>
      </ImCarta>

      <ImCarta titulo="#6 - Componente com condição V2 (com If)" color="#DC3535">
        <ImCondicaoIf numero={2/*prompt("digite um número")*/}></ImCondicaoIf>
      </ImCarta>

      <ImCarta titulo="#7 Comunicação Direta v1" color="#EB6440">
        <ImDireta sobrenome="Rodrigues"></ImDireta>
      </ImCarta>

      <ImCarta titulo="#8 comunicação Indireta" color="#CF0A0A">
        <ImIndireta></ImIndireta>
      </ImCarta>

      <ImCarta titulo="#9 Usando Input e hooks state" color="#000000">
        <ImInput></ImInput>
      </ImCarta>

      <ImCarta titulo="#10 Contador (useStates)" color="#000000">
        <ImConta></ImConta>
      </ImCarta>
    </div>
  </div>
)
