const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

router.get('/users', async (req, res) => {
    const urlapi = await fetch('https://jsonplaceholder.typicode.com/users');//https://crud-ce022.firebaseio.com/usuarios
    const users = await urlapi.json();
    res.json(users);
});

//AGREGAR
router.post('/movies', (req, res) => {

});

//EDITAR
router.put('/movies/:id', (req, res) => {

});

//BORRAR
router.delete('/movies/:id', (req, res) => {

});

module.exports = router;