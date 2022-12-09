import React from "react";
import Filho from "./Filho";

export default (param) => {
    return(
        <div>
            <h1>Filhos com sobrenome :</h1>
            <Filho sobrenome="Rodrigures"><strong>Iris</strong></Filho>
            <Filho sobrenome={param.sobrenome}>Carlos</Filho>
            <Filho {...param}>Maria</Filho>
        </div>
    )
}