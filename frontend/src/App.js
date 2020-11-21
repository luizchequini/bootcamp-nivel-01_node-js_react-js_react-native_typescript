import React from 'react'

import Header from './components/Header';

function App(){
    return (
        <>
            <Header title="Projetos Executados">
                <ul>
                    <li>Sala de Máquinas</li>
                    <li>Sala de Paletização</li>
                    <li>Sala de Embarque</li>
                </ul>
            </Header>
            <Header title="Quem Somos">
                <ol>
                    <li>Nossa Missão</li>
                    <li>Nossa História</li>
                </ol>
            </Header>
        </>
    );
}

export default App;