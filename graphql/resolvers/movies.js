const Movie = require("../../models/Movie");

module.exports = {
  Mutation: {
    async addmovie(
      _,
      { addMovieInput: { title, share_value } },
      context,
      info
    ) {
      const newMovie = new Movie({
        title,
        share_value,
      });

      const res = await newMovie.save();

      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
  Query: {
    async getMovies() {
      try {
        const movies = await Movie.find();
        return movies;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
