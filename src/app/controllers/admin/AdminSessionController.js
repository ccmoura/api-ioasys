import AdminSessionRepository from '../../repositories/admin/AdminSessionRepository';

class AdminSessionController {
    async store(request, response) {
        const { email, password } = request.body;

        const auth = await AdminSessionRepository.login(email, password);

        return response.status(201).json(auth);
    }
}

export default new AdminSessionController();
