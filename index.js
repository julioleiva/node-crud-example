const express = require('express');
const app = express();

app.use(express.json());

// Ejemplo de CRUD para una entidad ficticia "items"
let items = [];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    items.push(req.body);
    res.status(201).send();
});

app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.map(item => item.id === parseInt(id) ? req.body : item);
    res.send();
});

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id !== parseInt(id));
    res.send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
