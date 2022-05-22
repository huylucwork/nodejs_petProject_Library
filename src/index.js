const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const { dirname } = require('path')
const route = require('./route');
const db = require('./config/db/');
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.use(methodOverride('_method'))


//database
db.connect();

//static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({
    extended: true   
}));
app.use(express.json());

//http logger
//app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//route init
route(app);

//listen
app.listen(port, () => {
    console.log(`--------------Example app listening on port ${port}--------------`)
})