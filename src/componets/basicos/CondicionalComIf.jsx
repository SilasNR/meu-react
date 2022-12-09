import React from 'react'

import Comif from './if.js'

export default (props) => {
  return (
    <div>
      <h1>O número é {props.numero}</h1>
      <Comif test={props.numero % 2 === 0}>
        <span> Par </span>
      </Comif>
      <Comif test={props.numero % 2 === 1}>
        <span> Impar </span>
      </Comif>
    </div>
  )
}
