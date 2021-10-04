const express = require ('express');
const exphbs = require('express-handlebars');

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
    res.render('home');
})
app.get('/portfolio',(req, res) => {
    res.render('portfolio');
})
