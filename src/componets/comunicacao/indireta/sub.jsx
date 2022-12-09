import React from "react";

export default (param) => {
    return(
        <div>
            <button onClick={ () =>
                param.quandoClicar(Math.random(),"agora o é")
            }>Alterar</button>
        </div>
    )
}