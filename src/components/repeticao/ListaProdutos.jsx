import React from "react";
import produtos from '../../data/produtos'

export default props => {
    const produtosLI = produtos.map(produto => {
        return (
            <li key={produto.id}>
                {produto.id}) {produto.nome} {produto.preco}
            </li>
            )
    })
    return (
        <li style={{listStyle:'none'}}>
            {produtosLI}
        </li>
    )
}