import UserRepository from '../../repositories/user/UserRepository';

class UserController {
    async store(request, response) {
        const user = request.body;
        const newUser = await UserRepository.store(user);

        return response.status(201).json(newUser);
    }

    async update(request, response) {
        const user = request.body;
        const updated = await UserRepository.update(user, request.userId);

        return response.status(200).json(updated);
    }

    async delete(request, response) {
        await UserRepository.delete(request.userId);

        return response.status(200).json({ message: 'User deleted' });
    }
}

export default new UserController();
