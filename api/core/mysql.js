const mysql = require('mysql');
const conf = require('../config/config.json');

const db = mysql.createPool(conf[process.env.NODE_ENV]);



/*class MysqlDriver {

    async queryAssinc(sql, callbackResult = () => { }, callbackEnd = () => { }) {
        this.connection = mysql.createConnection(conf[process.env.NODE_ENV]);
        this.connection.connect(() => {
            console.log('connected!');
            const query = this.connection.query(sql)
            query.on('result', (row) => {
                console.log('row');
                callbackResult(row);
            });
            query.on('end', () => {
                this.connection.end();
                callbackEnd({ flag: true, message: 'query concluída com sucesso!' })
            });
        })
    }
}*/

module.exports = db;