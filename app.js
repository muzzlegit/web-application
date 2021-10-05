const express = require ('express');
const exphbs = require('express-handlebars');

const team = require('./team.json');
const clients = require('./clients.json');

const app = express();
const port = 8888;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static('public'));

app.set('view engine','hbs');
app.engine('hbs', exphbs({
    extname: 'hbs',
    }),
);

app.get('/',(req, res) => {
    res.render('home',{pageTitle:'WebStudio', team, clients});
})
app.get('/portfolio',(req, res) => {
    res.render('portfolio', {pageTitle:'Portfolio'});
})
app.get('/person-card/:personId', (req, res) => {
    console.log(req.params);
    const person = team.find(p => p.id === req.params.personId);
    res.render('person-card', {person});
})
