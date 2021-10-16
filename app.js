const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Olá Mundo, Lista de Tarefas hehe </h1>');
})

app.get('/json',(req, res) => {
    res.json({title: 'Tarefa a', done: true});
})

app.listen(3000, () => {
    console.log('O servidor foi iniciado');
})