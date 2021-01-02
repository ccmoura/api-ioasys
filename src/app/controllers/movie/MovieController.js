import MovieRepository from '../../repositories/movie/MovieRepository';

class MovieController {
    async index(request, response) {
        const filters = request.query;

        const movies = await MovieRepository.index(filters);

        return response.status(200).json(movies);
    }

    async store(request, response) {
        const movie = request.body;
        const newMovie = await MovieRepository.store(movie);

        return response.status(201).json(newMovie);
    }
}

export default new MovieController();
