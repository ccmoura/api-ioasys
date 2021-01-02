import Movie from '../../models/movie/Movie';

class MovieRepository {
    async index(filters) {
        const { director, name, gender, actors } = filters;

        const allMovies = await Movie.query().withGraphFetched('votes');
        let filtered = allMovies;

        if (director) {
            filtered = filtered.filter((movie) =>
                movie.director.toLowerCase().includes(director.toLowerCase())
            );
        }

        if (name) {
            filtered = filtered.filter((movie) =>
                movie.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        if (gender) {
            filtered = filtered.filter((movie) =>
                movie.gender.toLowerCase().includes(gender.toLowerCase())
            );
        }

        if (actors) {
            filtered = filtered.filter((movie) =>
                movie.actors.toLowerCase().includes(actors.toLowerCase())
            );
        }

        filtered.forEach((movie) => {
            if (movie.votes) {
                const votesArray = movie.votes.map((vote) => vote.vote);
                movie.votesAverage =
                    votesArray.reduce(
                        (accumulator, currentValue) =>
                            accumulator + currentValue
                    ) / movie.votes.length;
                movie.totalVotes = movie.votes.length;
                delete movie.votes;
            } else {
                movie.votesAverage = 0;
                movie.totalVotes = movie.votes.length;
                delete movie.votes;
            }
        });

        return filtered;
    }

    async store(movie) {
        const newMovie = await Movie.query().insert(movie);

        return newMovie;
    }
}

export default new MovieRepository();
