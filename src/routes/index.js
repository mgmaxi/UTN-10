const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Node/Express UTN TP 10'});
});

router.get('/form', (req,res) => {
    res.render('form.html', {title:'Formulario'});
} )

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Datos del Formulario'});
});

module.exports = router;