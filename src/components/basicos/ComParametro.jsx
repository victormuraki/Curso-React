import React from "react"

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2> {props.titulo}</h2>
            <p><strong>{props.nome}</strong>
                tem nota {props.nota} 
                 e foi {status}</p>
        </div>
    )
}