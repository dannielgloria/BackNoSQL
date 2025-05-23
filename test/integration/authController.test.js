import resquest from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../src/app.js';
import User from '../../src/models/Users.js';

let mongoServer;

beforeAll( async ()=>{
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
});

afterAll( async ()=>{
    await mongoose.disconnect();
    await mongoServer.stop();
});

afterEach( async ()=>{
    await User.deleteMany();
});

describe('Integracion de Test del controlador authController.js', () => {
    
    test('Registro de Usuario Exitoso', async () => { 
        const response = await resquest(app)
            .post('/api/v1/auth/register')
            .send({
                "name": "Pilar Mondragon Hernandez",
                "email": "pmh@gmail.com",
                "password": "aguacate"
            });
        
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('tokenAcces');
        expect(response.body.email).toBe('pmh@gmail.com');
        expect(response.body.name).toBe('Pilar Mondragon Hernandez');
    });

    test('Registro de Usuario Erroneo (usuario ya existente)', async () => {
        await User.create({
            "name": "Hugo Franco Gutiérrez",
            "email": "hfg@gmail.com",
            "password": "124rq3rcq"
        });

        const response = await resquest(app)
            .post('/api/v1/auth/register')
            .send({
                "name": "Hugo Franco Gutiérrez",
                "email": "hfg@gmail.com",
                "password": "1234"
            });
        
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('User already exists');
    });

    test('Registro de Usuario Erroneo (Faltan datos/ datos erroneos)', async () => {
        const response = await resquest(app)
            .post('/api/v1/auth/register')
            .send({
                "name": "Hugo Franco Gutiérrez",
                "password": "1234"
            });
        
        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Internal Server Error');
    });
});
