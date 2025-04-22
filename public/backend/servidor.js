const express = require('express');
const cors = require('cors');
const app = express();
const conexion = require('./conexion'); // Importamos la conexión
const PORT = 3000;

app.use(cors()); // Permitir peticiones desde el navegador
app.use(express.json());

// Ruta para obtener usuarios
app.get('/api/usuarios', (req, res) => {
  conexion.query('SELECT id, nombre, contraseña FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
      return;
    }
    res.json(results); // Enviar datos como JSON al frontend
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


