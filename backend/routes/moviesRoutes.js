const express = require('express')
const router = express.Router()
const { getMovies, setMovies, updateMovies, deleteMovies } = require('../controllers/moviesControllers')
const { protect } = require('../middleware/authMiddleware')

router.get('/', getMovies)
router.post('/', protect, setMovies)
router.put('/:id', protect, updateMovies)
router.delete('/:id', protect, deleteMovies)


module.exports = router