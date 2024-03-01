const express = require('express');
const pessoas = require('./pessoasRoutes.js');
const categorias = require('./categoriasRoutes.js');
const cursos = require('./cursosRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        categorias,
        cursos
    )
}