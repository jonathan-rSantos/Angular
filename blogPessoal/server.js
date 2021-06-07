const express = require('express');
const path = require('path');
const { asap } = require('rxjs');
const app = express();

const PORT = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/blogPessoal'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/blogPesssoal/index.html')
});

app.listen(PORT, () =>{
    console.log('servidor iniciado na porta ' + PORT);
})

