import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

//Route Params: qual recurso deletar ou modificar ex: users/:id
//Query Params: Paginação, filtros, ordenação ex: users?page=1

app.listen(3333);
