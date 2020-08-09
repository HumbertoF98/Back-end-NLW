import express from 'express';

const app = express();

app.use(express.json());

//Route Params: qual recurso deletar ou modificar ex: users/:id
//Query Params: Paginação, filtros, ordenação ex: users?page=1

app.get('/', (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(3333);
