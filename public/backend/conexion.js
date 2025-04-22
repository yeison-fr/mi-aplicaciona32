const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ventasnew'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');

  connection.query('SELECT * FROM vendedor', (error, results, fields) => {
    if (error) {
      console.error('Error en la consulta:', error);
      return;
    }

    
  });
});
