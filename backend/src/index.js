const { request } = require('express');
const express = require('express');
const{ uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
/**
 * Metodos HTTP
 * 
 * GET:          Busca informações do back-end
 * POST:         Criar uma informação no back-end
 * PUT/PATCH:    Alterar uma informação no back-end
 * DELETE:       Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar e Deletar)
 * Request Body: Conteúdo na de criar ou editar conteúdo.
 */
 
/**
 * Mideleware um dos maiores conceitos do Express
 * Todo o Express é baseado em Middleware
 * 
 * E middleware são funções que recebem um requisição e resposta e pode interromper a resposta ou senão ele avança dando o next caso ele queira a requesição deva proceguir.
 * 
 * Interceptador de rquisições
 * Que pode interromper totalmente uma requisição ou Alterar dados da requisição.
 * O Middleware é uma função e ela sempre recebe uma request, response e o next diferenciando das rotas que também podemos falar que são middlewares pois as mesmas tem esta propriedade. 
 * Middleware podem ser usados quando queremos que uma trecho do codigo seja disparado automaticamente em uma ou mais rotas da nossa aplicação.
 * 
 * Como exemplo
 * na função logRequests 
 */

const projects = [];

function logRequests(request, response, next){
    const {method, url} = request;

    const logLabel = `${method.toUpperCase()} ${url}`;

    console.log('Passo 1');
    console.time(logLabel);

    next();

    console.log('Passo 2');
    console.timeEnd(logLabel);
}

function validateProjectId(request, response, next){
    const { id } = request.params;

    if(!isUuid(id)){
        return response.status(400).json({error:'Invalid project ID'});
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request, response) => {
    
    console.log('Passo 3');
    
    const {title} = request.query;

    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {

    const {title, owner} = request.body;

    const project = {id:uuid(), title, owner};

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {title, owner} = request.body;
    
    const projectIndex = projects.findIndex(project => project.id == id);
    
    if(projectIndex < 0){
        return response.status(400).json({error:'Project not found.'});
    }


    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', validateProjectId, (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0){
        return response.status(400).json({error:'Project not found.'});
    }

    projects.splice(projectIndex, 1);
    
    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('🚗🚓🚕Back-end started!🚗🚓🚕');
});