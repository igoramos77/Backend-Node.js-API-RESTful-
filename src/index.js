const { query } = require('express');
const { v4: uuidv4 } = require('uuid');

const express = require('express');

const app = express();

app.use(express.json());

/* 
* GET: Buscar informações no back-end
* POST: Criar informações no back-end
* PUT: Alterar informações no back-end
* DELETE: Excluir informações no back-end
*/

/* 
* Query Params: Filtros e paginação
* Route Params: Identificar recursos na hora de atualizar ou deletar (put/delete)
* Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
*/

const projects = [];

app.get('/projects', (request, response) => {

  return response.json(projects)
})

app.post('/projects', (request, response) => {
  const { title, editor } = request.body;

  const project = { id: uuidv4(), title, editor }
  projects.push(project);

  return response.json(project);
})

app.put('/projects/:id', (request, response) => {
  const params = request.params;
  const { id } = request.params;
  console.log(params);
  console.log(id);

  return response.json([
    'projeto 4',
    'projeto 2',
  ])
})

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'projeto 4',
  ])
})





app.listen(3333, () => {
  console.log('backend start! 🌟');
});