require('dotenv').config({path:"var.env"});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

const routes = require('./routes');
server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log('Servidor rodando...');
})