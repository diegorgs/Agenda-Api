const { deleteAgenda } = require('../services/AgendaService');
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


    buscarMes: async (req, res) => {
        let json = {erro:'', result:{}};
        let mes = req.params.mes;        
        let resultado = await AgendaService.buscarMes(mes);
      
        if(resultado){
            json.result = mes;
        }else{
            json.result = "Não achou"
        }
        res.json(json);
    },
    

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


    updateAgenda: async(req, res)=>{
        let json = {erro:'', result:{}};
        let data = req.body.data;  
        let desc = req.body.desc;
        let id = req.params.id;    
            
        if(data && desc){
         let agenda = await AgendaService.updateAgenda(id,data,desc);
         if(agenda){
                json.result = agenda;
         }
        }else{
            json.result = "Preencha todos os campos !!!";
        }  
        res.json(json);
    },
    deleteAgenda: async(req, res)=>{
        let json = {erro:'', result:{}};
        let id = req.params.id;    
            
        if(id){
         let agenda = await AgendaService.deleteAgenda(id);
         if(agenda){
                json.result = agenda;
         }
        }else{
            json.result = "Erro ao selecionar o id !!!";
        }  
        res.json(json);
    }
};