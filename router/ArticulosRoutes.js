var express = require('express');
var router = express.Router();

const Articulos = require('../models/Articulos');
// CRUD Articulos

//create article
router.post('/api/v1/articulos', (req, res) => {
    Articulos.create(req.body)
        .then(articulo => res.status(201).json(articulo))
        .catch(err => res.status(400).json(err));
});

// read articles 
router.get('/api/v1/articulos', (req, res) => {
    Articulos.find()
        .then(articulos => {
            if (articulos.length === 0) res.status(200).json({ mensaje: 'No hay articulos en este momento' });
            res.status(200).json(articulos);
        })
        .catch(err => res.status(400).json(err));
});

//read article
router.get('/api/v1/articulos/:id', (req, res) => {
    Articulos.findById(req.params.id)
        .then(articulo => res.status(200).json(articulo))
        .catch(err => res.status(404).json(err));
});


//modified article
router.patch('/api/v1/articulos/:id', (req, res) => {
    Articulos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(articulo => res.status(200).json(articulo))
        .catch(err => res.status(404).json(err));
});

//deleted articles
router.delete('/api/v1/articulos/:id', (req, res) => {
    Articulos.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

module.exports = router;