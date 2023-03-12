const AgendaService = require('../services/AgendaService');
module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erro:'', result:[]};
        let lembretes = await AgendaService.buscarTodos();

        
        for(let i in lembretes){
            json.result.push({
                id: lembretes[i].id,
                desc: lembretes[i].descAgenda,
                data: lembretes[i].diaAgenda,   
                hora: lembretes[i].horaAgenda,
                mes: lembretes[i].mesAgenda,
                rank: lembretes[i].rank
            })
        }
        res.json(json);
    },


    /*buscarVeiculo: async (req, res) => {
        let json = {erro:'', result:{}};
        let placa = req.params.placa;        
        let veiculo = await EstacionamentoService.buscarVeiculo(placa);
      
        if(veiculo){
            json.result = veiculo;
        }else{
            json.result = "Não achou"
        }
        res.json(json);
    },
    */

    inserirAgenda: async (req, res) => {
        let json = {erro:'', result:{}};
        let data = req.body.data;  
        let desc = req.body.desc;
            
        if(data && desc){
         let agenda = await AgendaService.inserirAgenda(data,desc);
         if(agenda){
                json.result = agenda;
         }
        }else{
            json.result = "Preencha todos os campos !!!";
        }
     
        res.json(json);
    },


};