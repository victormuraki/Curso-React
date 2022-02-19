import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from "./components/Aleatorio";
import Card from "./components/Card";
import './App.css'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";


export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#08 - Formatacao Condicional" color="#00C8F8">
                <ParOuImpar numero={25}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Victor'}} />
                <UsuarioInfo usuario={{email: 'Joselito'}} />
            </Card>

            <Card titulo="#07 - Exercicio Repeticao" color="#00C8F8">
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo="#06 - Repeticao" color="#00C8F8">
                <ListaAlunos> </ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    < FamiliaMembro nome="Pedro" />
                    < FamiliaMembro nome="Ana" />
                    < FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="Desafio Aleatório" color="#090">
                <Aleatorio min={10} max={100} />
            </Card>
            <Card titulo="Com Paramentro" color="#E94C6F">
                < ComParametro titulo="Situação do aluno" nome="Victor" nota={9.3} />
            </Card>
            <Card titulo="Primeiro exercicio" color="#E8B71A">
                <Primeiro />
            </Card>
        </div>

    </div>
)