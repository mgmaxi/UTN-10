const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// settings
app.set('port', process.env.PORT || 3000)

app.set ('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); // cambiar/procesar la extension .ejs por .html (para entender mejor el codigo, ya que podria dejarse en .ejs)
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.urlencoded({extended:true}));

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

// form
app.get('/form',(req,res) => {
    res.sendFile(path.join(__dirname,'views/contact.html'));
});

app.post('/contact', (req,res) => {
    res.render('contact.html', {firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age, celphone: req.body.celphone, countryBirth: req.body.countryBirth, countryResidence: req.body.countryResidence});
});