import React from "react";
import produtos from '../../data/produtos'
import './ListaProdutos.css'

export default props => {
    const produtosLI = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
    return (
        <div className="ListaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosLI}
                </tbody>
            </table>
        </div>
    )
}