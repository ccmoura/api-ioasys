import UserSessionRepository from '../../repositories/user/UserSessionRepository';

class UserSessionController {
    async store(request, response) {
        const { email, password } = request.body;

        const auth = await UserSessionRepository.login(email, password);

        return response.status(201).json(auth);
    }
}

export default new UserSessionController();
