'use strict'

let cine = require('../models/cine'),
    express = require('express'),
    router = express.Router()

function error404(req, res, next) {
    let error = new Error(),
        locals = {
            title: 'Error 404',
            description: 'Recursos No Encontrado',
            error: error
        }
    error.status = 404
    res.render('error', locals)
    next()
}

router.use(cine)
router.get('/', (req, res, next) => {
        req.getConnection((err, cine) => {
            cine.query('SELECT * FROM pelicula', (err, rows) => {
                let locals = {
                    title: 'lista Peliculas',
                    data: rows
                }
                res.render('index', locals)

            })
        })
        next()
    })
    .use(error404)

module.exports = router