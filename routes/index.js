'use strict'

let cine = require('../models/cine'),
    express = require('express'),
    router = express.Router()


function error404(req, res, next) {
    let error = new Error(),
        locals = {
            title: 'Error 404',
            description: 'Recurso No Encontrado',
            error: error
        }
    error.status = 404

    res.render('error', locals)

    //next()
}
router
    .use(cine)
    .get('/', (req, res, next) => {
        req.getConnection((err, cine) => {
                cine.query('SELECT * FROM pelicula', (err, rows) => {
                    let locals = {
                        title: 'Lista de Películas',
                        data: rows
                    }
                    res.render('index', locals)
                })
            })
            //next()
    })
    .get('/agregar', (req, res, next) => {
        res.render('add-movie', { title: 'Agregar Pelicula' })
    })
    .use(error404)

module.exports = router