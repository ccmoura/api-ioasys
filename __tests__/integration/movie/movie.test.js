const request = require('supertest');
const app = require('../../../src/app');

describe('Movie tests', () => {
    it('should be able to list O Iluminado', async () => {
        const response = await request(app).get('/movies?name=Iluminado');

        console.log(response.body);
        expect(response.body[0].name).toBe('O Iluminado');
    });
});
