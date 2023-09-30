const asyncHandler = require('express-async-handler')
const Movie = require('../models/moviesModel')

function IsAdmin(req,res) {
    if(req.user.admin !== true){
        res.status(401)
        throw new Error('Unauthorized. No admin user was found.')
    }
}

const getMovies = asyncHandler(async (req, res) => {
    const movie = await Movie.find()
    res.status(200).json(movie)
})

const setMovies = asyncHandler(async (req, res) => {
    IsAdmin(req,res)
    if(!req.body.original_language || !req.body.original_title || !req.body.overview || !req.body.release_date || !req.body.poster_patch) {
        res.status(400)
        throw new Error('Please fill in the blanks for all fields.')
    }
    const movie = await Movie.create({
        original_language: req.body.original_language,
        original_title: req.body.original_title,
        overview: req.body.overview,
        release_date: req.body.release_date,
        poster_patch: req.body.poster_patch
    })
    res.status(201).json(movie)
})

const updateMovies = asyncHandler( async (req, res) => {
    IsAdmin(req,res)
    const movie = await Movie.findById(req.params.id)
    if(!movie){
        res.status(404)
        throw new Error ('The movie was not found.')
    }
    if(!req.body.original_language || !req.body.original_title || !req.body.overview || !req.body.release_date || !req.body.poster_patch) {
        res.status(400)
        throw new Error('Please fill in the blanks for all fields.')
    }else {
        const updateMovies = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updateMovies)
    }
})

const deleteMovies = asyncHandler(async (req, res) => {
    IsAdmin(req,res) 
    const movie = await Movie.findById(req.params.id)
    if(!movie){
        res.status(404)
        throw new Error ('The movie was not found.')
    }
    movie.deleteOne()
    res.status(200).json({ id: movie._id})
})

module.exports = {
    getMovies,
    setMovies,
    updateMovies,
    deleteMovies
}