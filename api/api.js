const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');


/**
 * Preparando bodyParser para pegar POSTs no 
 * formato URLEncoded e JSON
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Definição de rotas
 */
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'API funcionando!' }));



router.get('/perguntas', (req, res)=>{ execSQLQuery(`SELECT * FROM perguntas`, res)} )
router.get('/check/:token', (req, res)=>{ execSQLQuery(`SELECT * from usuario where hash = '${req.params.token}'`, res) } )
router.get('/perguntas/random', async (req, res) => {
  execSQLQuery(`SELECT * FROM perguntas where id in ( ${Math.round(Math.random() * (0, 21))}, ${Math.round(Math.random() * (0, 21))}, ${Math.round(Math.random() * (0, 21))} )`, res)
  
})

router.post('/pegarBis', async (req, res) => {
  
  answer = req.body.answers.split(';');
  execSQLQuery(`SELECT count(*) as QTD FROM perguntas where id in ('${answer[0]}','${answer[1]}','${answer[2]}')`, res)
  
})



app.use('/', router);


/**
 * Iniciando o servidor
*/
app.listen(port);
console.log('API funcionando!');



function execSQLQuery(sqlQry, res){
  /*
  const connection = mysql.createConnection({
      host:'127.0.0.1',
      port:'3306',
      user:'root',
      database:'miniwizard'
  })*/

  const connection = mysql.createConnection({
    user: "yoosta74_sexta",
    password: "sextoubis",
    database: "yoosta74_sextoubis",
    host: "br954.hostgator.com.br",
    dialect: "mysql"
  })

  connection.query(sqlQry, function(error, results, fields){
    res.header("Access-Control-Allow-Origin", "*");
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
  });
  
}

