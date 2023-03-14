const db = require('./db');
module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT id, horaAgenda, diaAgenda, mesAgenda, descAgenda, RANK() OVER(PARTITION BY mesAgenda ORDER BY dataAgenda) rank FROM(SELECT id, DATE_FORMAT(dataAgenda, "%H:%i") horaAgenda, DATE_FORMAT(dataAgenda, "%d/%m/%Y") diaAgenda, DATE_FORMAT(dataAgenda, "%m/%Y") mesAgenda, dataAgenda, descAgenda FROM agenda) x ORDER BY dataAgenda', (error, results) => {
                if (error) { rejeitado(error); return }
                aceito(results);
            })
        })
    },
    buscarMes: () => {
        return new Promise((aceito, rejeitado) => {
            db.query(`SELECT id, descAgenda, DATE_FORMAT(dataAgenda, "%m/%Y") as mesAgenda FROM agenda WHERE DATE_FORMAT(dataAgenda, "%m/%Y") = '${mes}'`, (error, results) => {
                if (error) { rejeitado(error); return }
                aceito(results);
            })
        })
    },
    inserirAgenda: (data, desc) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO agenda (dataAgenda,descAgenda) VALUES(?,?) '
                , [data, desc], (error, results) => {
                    if (error) { rejeitado(error); return }
                    aceito(results)
                })
        })
    },
};