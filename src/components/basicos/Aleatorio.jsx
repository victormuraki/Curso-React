import React from "react";

export default (props) => {
    const {min, max} = props;

    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor minimo: { min } </p>
            <p>Valor máximo: { max } </p>
            <p>Valor escolhido: { aleatorio } </p>
        </div>
    )
}
