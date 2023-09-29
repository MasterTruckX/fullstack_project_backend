const asyncHandler = require('express-async-handler')
const Movie = require('../models/moviesModel')

const getMovies = asyncHandler(async (req, res) => {
    const movie = await Movie.find()
    res.status(200).json(movie)
})

module.exports = {
    getMovies
}