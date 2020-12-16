const express = require('express');
const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');
const bodyParser = require('body-parser');

var app = express();
//------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//endereço será: localhost:3001/marcarConsulta
app.get('/marcarConsulta', (req, res) => { 
	marcarConsulta(res);
});


//endereço será: localhost:3001/consultarAgenda
app.get('/consultarAgenda', (req, res) => { 
    consultarAgenda(res);
});


//endereço será: localhost:3001/convenio
app.get('/convenio', (req, res) => { 
	convenio(res);
});


//endereço será: localhost:3001/editarFicha
app.get('/editarFicha', (req, res) => {
	editarFicha(res);
});


//portas abertas
app.listen(3001, () => {
  console.log(`Server launched on port 3001`)
})
//------------------


//funções de chamada dos dados do banco
async function marcarConsulta(res) 
{
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig); //testar conexão
    console.log('Connection was successful!');
	
	const sql = 'select * from MARCAR_CONSULTA'; //demonstrar tudo da tabela específica
	let ret =  await connection.execute(sql);

	res.send(ret.rows);
	return ret;
	
//tratamento de erros
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
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
	
	const sql = 'select * from CONSULTAR_AGENDA'; 
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
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
	
	const sql = 'select * from CONVENIO'; 
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
    connection = await oracledb.getConnection(dbConfig);
    console.log('Connection was successful!');
	
	const sql = 'select * from EDITAR_FICHA'; 
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

