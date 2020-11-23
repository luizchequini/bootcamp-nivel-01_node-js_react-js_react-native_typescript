import React, {useState, useEffect} from 'react'
import api from './services/api'

import './App.css'
import background from './assets/motos-custom-2020.jpg'

import Header from './components/Header';

function App(){

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject(){
        
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Luiz Chequini"
        });

        const project = response.data;
        
        setProjects([...projects, project]);
    };

    return (
        <>
            <img src={background} width={300}/>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
            
            <Header title="Projetos Executados">
                <ul>
                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>
            </Header>
        </>
    );
}

export default App;