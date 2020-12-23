const { query } = require('express');
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


app.get('/projects', (request, response) => {
  const { title, editor } = request.query;
  console.log(query);

  return response.json([
    'projeto 1',
    'projeto 2',
  ])
})

app.post('/projects', (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ])
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