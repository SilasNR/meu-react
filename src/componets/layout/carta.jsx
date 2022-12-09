import './carta.css'
import React from 'react'

export default param =>
  <div className="Carta" style={{borderColor: param.color}}>
      <div className="Conteudo">
        {param.children}
      </div>
      <div className="Footer" style={{backgroundColor: param.color}}>
        <h3>{param.titulo}</h3>
      </div>
  </div>
