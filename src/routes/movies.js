const express = require('express');
const router = express.Router();

const movies = require('../pelis.json');//console.log(movies);

router.get('/movies', (req, res) => {
    res.json(movies);
});

router.post('/movies', (req, res) => {
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        res.send('Saved');
    }else{
        res.send('Su petición no puede ser procesada');
    }
    res.send('Recibido');
});

module.exports = router;