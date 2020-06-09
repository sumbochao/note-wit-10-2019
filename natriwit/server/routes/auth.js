const User = require('../models/user')
const Movie = require('../models/movie')
const showtime = require('../models/showtime')

const Router = require('express-promise-router')
let router = new Router();

/***************Auth API ******************/
router.get('/', async (req, res, next) => {
    next();
});

router.post('/', async (req, res, next) => {
    next();
});

router.put('/', async (req, res, next) => {
    next();
});

router.delete('/', async (req, res, next) => {
    next();
});

module.exports = router