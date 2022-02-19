import React from "react";
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <div>Seja bem vindo {usuario.nome}</div>
            </If>
            <If test={!usuario || !usuario.nome}>
                <div>Seja bem vindo usuário</div>
            </If>
        </div>

    )
}