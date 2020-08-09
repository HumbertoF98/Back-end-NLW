import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    { name: "Diego", age: "25" },
    { name: "Diego", age: "25" },
    { name: "Diego", age: "25" },
  ];

  return response.json(users);
  console.log('Acessou a rota');
});

app.listen(3333);
