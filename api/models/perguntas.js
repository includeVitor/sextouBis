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

perguntas.allUsers = () => {
    return new Promise( (resolve, reject) => {
        db.query(`SELECT * from usuario `, (err, results) => {
            if (err){
                reject(err);
            }
            resolve(results);
        })
    })
}

perguntas.check = (params) => {
    return new Promise( (resolve, reject) => {
        db.query(`SELECT * from usuario where hash = '${params.token}'`, (err, results) => {
            if (err){
                reject(err);
            }
            resolve(results);
        })
    })
}


// INSERT INTO usuario (nome,hash,qtd_disponivel,qtd_retirada,qtd_maxima) values ('Vitor', '41065373584486e04d5cc8cb7cef0c71',0,0,5)

module.exports = perguntas;

