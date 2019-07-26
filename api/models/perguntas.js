const db = require('../core/mysql');

let perguntas = {};

perguntas.getPerguntas = (params) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM perguntas where id in ( ?,?,? )`, [params.id1, params.id2, params.id3 ], (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            })
    });
}

perguntas.all = () => {
    return new Promise( (resolve, reject) => {
        db.query(`SELECT * FROM perguntas`, (err, results) => {
            if (err){
                reject(err);
            }
            resolve(results);
        })
    })
}

module.exports = perguntas;