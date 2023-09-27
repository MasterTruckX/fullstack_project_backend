// https://api.themoviedb.org/3/movie/popular?api_key=c2525d0edb9b982c034d6f755a582ad4
// {"adult":false,
// "backdrop_path":"/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
// "genre_ids":[28,878,12],
// "id":565770,
// "original_language":"en",
// "original_title":"Blue Beetle",
// "overview":"Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
// "popularity":3538.632,
// "poster_path":"/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
// "release_date":"2023-08-16",
// "title":"Blue Beetle",
// "video":false,
// "vote_average":7.1,
// "vote_count":863}
// https://image.tmdb.org/t/p/w780/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg
const mongoose = require('mongoose')

const moviesSchema = mongoose.Schema({
    original_language: {
        type: String,
        require: [true, 'Please type the original language.']
    },
    original_title: {
        type: String,
        require: [ true, 'Please type the original title.']
    },
    overview: {
        type: String,
        require: [ true, 'Please type the overview.']
    },
    release_date: {
        type: Date,
        require: [true, 'Please type the release date.']
    },
    poster_patch: {
        type: String,
        require: [ true, 'Please type the image URL.']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Movie', moviesSchema)