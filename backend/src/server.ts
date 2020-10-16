import express from 'express';

import './database/connection';

const porta = 3333;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({message: 'hello world'})
})

app.listen(`${porta}`, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});