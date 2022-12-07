import './carta.css'
import React from 'react'

export default param =>
  <div className="Carta">
      <div className="Conteudo">
        {param.children}
      </div>
      <div className="Footer">
        <h3>{param.titulo}</h3>
      </div>
  </div>
