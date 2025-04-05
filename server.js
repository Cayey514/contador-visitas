const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para obtener el número de visitas
app.get('/visits', (req, res) => {
    const visitsFile = path.join(__dirname, 'visits.json');

    // Leer el archivo visits.json
    fs.readFile(visitsFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el contador de visitas.');
        }

        let visitsData = JSON.parse(data);
        visitsData.count += 1; // Incrementar el contador

        // Guardar el nuevo valor en el archivo
        fs.writeFile(visitsFile, JSON.stringify(visitsData), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al actualizar el contador de visitas.');
            }

            // Enviar el nuevo contador al cliente
            res.json({ count: visitsData.count });
        });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});