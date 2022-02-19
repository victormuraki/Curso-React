import React from "react";

export default props => {
    const Ispar = props.numero % 2 === 0
    return (
        <div>
            {Ispar ? <span>É par</span> : <span>é ímpar</span>
        }
        </div>
    )
}