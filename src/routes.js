const express = require('express');
const router = express.Router();
const AgendaController = require('./controllers/AgendaController');


router.post('/agendacad', AgendaController.inserirAgenda)
router.get('/agendaexibir', AgendaController.buscarTodos)
router.get('/agendaFilterMouth', AgendaController.buscarTodos)

module.exports = router;