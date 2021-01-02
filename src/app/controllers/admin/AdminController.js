import AdminRepository from '../../repositories/admin/AdminRepository';

class AdminController {
    async store(request, response) {
        const admin = request.body;
        const newAdmin = await AdminRepository.store(admin);

        return response.status(201).json(newAdmin);
    }

    async update(request, response) {
        const admin = request.body;
        const updated = await AdminRepository.update(admin, request.userId);

        return response.status(200).json(updated);
    }

    async delete(request, response) {
        await AdminRepository.delete(request.userId);

        return response.status(200).json({ message: 'Admin deleted' });
    }
}

export default new AdminController();
