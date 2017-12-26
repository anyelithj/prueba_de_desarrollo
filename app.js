'use strict'
let express = require('express'),
    //path => para poder concatenar las rutas staticas de nuestro proyecto sobretodo la carpeta de vista y la public
    //path = require('path'), // se requiere el modulo de path
    favicon = require('serve-favicon'), // se requiere el modulo serve-favicon
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    jade = require('jade'), //se requiere jade 
    routes = require('./routes/index'), //especificar el archivo de las rutas
    //faviconURL = `${__dirname}/public/img/favicon.png`,
    //publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express()
    // aqui empieza el acceso
app
//configurando app
    .set('views', viewDir)
    .set('view engine', 'jade')
    .set('port', port)
    //ejecutando middlewares
    //.use(favicon(faviconURL))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(morgan('dev'))
    //.use(publicDir)
    //ejecuto el middleware enrutador
    .use(routes)

module.exports = app;

/*.get('/', (req, res) => {
        res.end('<h1>Hola Mundo desde Express</h1>')
    })
    // indicamos el puerto que va escuchar 
    .listen(3000)
    // mensaje a la consola 
console.log('Inicaicando Express en el puerto 3000')*/