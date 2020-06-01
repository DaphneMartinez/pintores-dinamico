const express = require('express');
const hbs = require('hbs');

const app = expres();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        grado : 4,
        grupo :'G',
        autor : 'Daphne Sabrina Martínez Campos',
        title : 'inicio'
    });
});

app.get('/vincent', (req, res)=>{
    res.render('van', {
        grado : 4,
        grupo :'G',
        autor : 'Daphne Sabrina Martínez Campos',
        title : 'Vincent van Gogh'
    });
});

app.get('/picasso', (req, res)=>{
    res.render('pablo', {
        grado : 4,
        grupo :'G',
        autor : 'Daphne Sabrina Martínez Campos',
        title : 'Pablo Picasso'
    });
});

app.get('/salvador', (req, res)=>{
    res.render('dali', {
        grado : 4,
        grupo :'G',
        autor : 'Daphne Sabrina Martínez Campos',
        title : 'Salvador Dalí'
    });
});

app.get('/leonardo', (req, res)=>{
    res.render('vinci', {
        grado : 4,
        grupo :'G',
        autor : 'Daphne Sabrina Martínez Campos',
        title : 'Leonardo da Vinci'
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});