const express = require('express');
const router = express.Router();
const AgendaController = require('./controllers/AgendaController');


router.post('/agendacad', AgendaController.inserirAgenda)
router.get('/agendaexibir', AgendaController.buscarTodos)

module.exports = router;