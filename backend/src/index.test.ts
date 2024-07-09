import request from 'supertest';
import express from 'express';

import { Server } from 'http';

require('dotenv').config();
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let server: Server;

beforeAll((done) => {
  server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    done();
  });
});

// Después de todas las pruebas, cierra el servidor
afterAll((done) => {
  server.close(() => {
    console.log("Server closed");
    done();
  });
});

describe('GET /', () => {
  it('debería responder con un mensaje de Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});