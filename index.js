const express = require('express');
const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');
const bodyParser = require('body-parser');

var app = express();
//------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/marcarConsulta', (req, res) => { //localhost:3001/marcarConsulta
	marcarConsulta(res);
});


app.get('/consultarAgenda', (req, res) => { //localhost:3001/consultarAgenda
    consultarAgenda(res);
});


app.get('/convenio', (req, res) => { //localhost:3001/convenio
	convenio(res);
});


app.get('/editarFicha', (req, res) => { //localhost:3001/editarFicha
	editarFicha(res);
});


app.listen(3001, () => {
  console.log(`Server launched on port 3001`)
})
//------------------

async function marcarConsulta(res) 
{
  let connection;
  try {
    // CÓDIGO CONTINUA O MESMO
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
	
	const sql = 'select * from MARCAR_CONSULTA'; //mude a tabela para a tabela de consultas
	let ret =  await connection.execute(sql);

	res.send(ret.rows);
	return ret;
	

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}


async function consultarAgenda(res) 
{
  let connection;
  try {
    // CÓDIGO CONTINUA O MESMO
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
	
	const sql = 'select * from CONSULTAR_AGENDA'; //mude a tabela para a tabela de ficha e mude o comando de SELECT para UPDATE
	let ret =  await connection.execute(sql);

	res.send(ret.rows);
	return ret;
	

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}


async function convenio(res) 
{
  let connection;
  try {
    // CÓDIGO CONTINUA O MESMO
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
	
	const sql = 'select * from CONVENIO'; //mude a tabela para a tabela pra tabela que precisa ser consultada
	let ret =  await connection.execute(sql);

	res.send(ret.rows);
	return ret;
	

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}


async function editarFicha(res) 
{
  let connection;
  try {
    // CÓDIGO CONTINUA O MESMO
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
	
	const sql = 'select * from EDITAR_FICHA'; //mude a tabela para a tabela pra tabela que precisa ser consultada
	let ret =  await connection.execute(sql);

	res.send(ret.rows);
	return ret;
	

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

