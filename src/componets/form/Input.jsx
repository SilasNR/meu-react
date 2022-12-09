import React, {useState} from "react";

export default (param) => {
    const [texto , alteraTexto] = useState('')

    return(
        <React.Fragment>
            <h1>Escreva no espaço abaixo !</h1>
            <h3>{texto}</h3>
            <input type="text" value={texto} 
            onChange={e => alteraTexto(e.target.value)}/>
        </React.Fragment>
    );
}