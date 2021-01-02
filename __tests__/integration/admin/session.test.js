const request = require('supertest');
const app = require('../../../src/app');

describe('Admin session tests', () => {
    it('should be able to login', async () => {
        const response = await request(app).post('/admins/sessions').send({
            email: 'ccmoura@inf.ufpel.edu.br',
            password: '12345678',
        });

        expect(response.status).toBe(201);
    });
});
