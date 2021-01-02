import Vote from '../../models/movie/Vote';

class VoteRepository {
    async store(vote) {
        const voteExists = await Vote.query().findOne({
            deleted: false,
            user_id: vote.user_id,
            movie_id: vote.movie_id,
        });

        if (voteExists) {
            delete vote.movie_id;
            delete vote.user_id;
            await Vote.query().patchAndFetchById(voteExists.id, vote);
        } else {
            await Vote.query().insert(vote);
        }

        return vote;
    }
}

export default new VoteRepository();
