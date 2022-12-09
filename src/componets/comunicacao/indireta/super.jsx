import React, {useState} from "react";
import Sub from "./sub"

export default (param) => {

    const [num, setNum] = useState(0)
    const [txt, setTxt] = useState("O valor ainda é")

    function Clicou(valor,texto){
        setNum(valor)
        setTxt(texto)
    }

    return(
        <div>
            <h1>Clique no botão</h1>
            <h4>{txt} : {num}</h4>
            <Sub quandoClicar={Clicou}></Sub>
        </div>
    )   
};