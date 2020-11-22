import React, {useState} from 'react'

import './App.css'
import background from './assets/motos-custom-2020.jpg'

import Header from './components/Header';

function App(){

    const [projects, setProjects] = useState(['Back-End', 'Front-End', 'Full-Stack']);
    
    function handleAddProject(){
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    };

    return (
        <>
            <img src={background} width={300}/>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
            
            <Header title="Projetos Executados">
                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>
            </Header>
        </>
    );
}

export default App;