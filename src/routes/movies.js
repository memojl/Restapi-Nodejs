const express = require('express');
const router = express.Router();
const _ = require('underscore');

const movies = require('../pelis.json');//console.log(movies);

router.get('/movies', (req, res) => {
    res.json(movies);
});


router.get('/movies/:id', (req, res) => {
    const {id} = req.params;
    /*
    _.each(movies, (movie, i)=>{
        if(movie.id == id){
            res.json(movie);
        }            
    });
    */    
    movies.forEach(movie => {
        if(movie.id == id){
            res.json(movie);
        }         
    });

});

//AGREGAR
router.post('/movies', (req, res) => {
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        let id = movies.length + 1;
        const newMovie = {...req.body,id}
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error: 'Su petición no puede ser procesada'});
    }
    //res.send('Recibido');
});

//EDITAR
router.put('/movies/:id', (req, res) => {
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        _.each(movies, (movie, i)=>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: 'Su petición no puede ser procesada'});
    }
});

//BORRAR
router.delete('/movies/:id', (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i)=>{
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send('Se elimino la pelicula: '+id);
});

module.exports = router;