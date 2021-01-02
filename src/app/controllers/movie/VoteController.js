import VoteRepository from '../../repositories/movie/VoteRepository';

class VoteController {
    async store(request, response) {
        const vote = request.body;
        vote.user_id = request.userId;
        const newVote = await VoteRepository.store(vote);

        return response.status(201).json(newVote);
    }
}

export default new VoteController();
