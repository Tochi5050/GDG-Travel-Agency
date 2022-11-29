const express = require('express')
const handlebars = require('express-handlebars').create({ defaultLayout:'main' });

const app = express()

app.set('port', process.env.PORT || 3000)

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(__dirname + 'public')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.use((req, res) => {
    res.status('404')
    res.render('404 - This page doesnt exist')
})

app.use((err, req, res, next) => {
    res.status('500')
    res.render('500 - This page doesnt exist')
})




app.listen(app.get('port'))