const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const request = require('supertest');
const path = require('path');
const fs = require('fs');
const Neighborhood = require('./database/models/neighborhoods.js');


const mockNeighborhood = {
  name: 'Delia',
  city: 'Shangchewan',
  country: 'China',
  gettingAround: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
  latitude: 29.806827,
  longitude: 113.013638,
  guidebookId: 2
};


describe('Express Server and MongoDB', () => {
  const app = require('./server/index.js');
  let memMongo;
  let server;

  let agent;

  beforeAll(async (done) => {
    jest.setTimeout(10000);

    memMongo = await new MongoMemoryServer();
    process.env.MONGODB_URI = await memMongo.getConnectionString();

    await Neighborhood.deleteMany();
    await Neighborhood.create(mockReview);

    server = await app.listen(4000, (err) => {
      if (err) {
        return done(err);
      }

      agent = request.agent(server); // since the application is already listening, it should use the allocated port
      done();
    });
  });

  afterAll(async (done) => {
    await mongoose.disconnect();
    return server && await server.close(done);
  });

  test('Should respond with an error to invalid paths', async () => {
    const res = await request(server).get('/ridiculous/rhinocerous');
    expect(res.statusCode).toBe(404);
  });

  test('Should respond to requests to /neighborhoods', async () => {
    const res = await request(server).get('/rooms/11111111');
    expect(res.statusCode).toBe(200);
  });

  test('Should respond with a 200 OK to GET requests to /api/rooms/:roomId/ratings', async () => {
    const res = await request(server).get('/api/rooms/11111111/ratings');
    expect(res.statusCode).toBe(200);
  });

  test('Should retrieve all rating records from DB on GET requests to /api/rooms/:roomId/ratings', async () => {
    const res = await request(server).get('/api/rooms/11111111/ratings');
    expect(res.body[0].roomId).toBe(11111111);
    expect(res.body.length).toBe(2);
  });

  test('Should retrieve an empty array from DB on GET requests to /api/rooms/:roomId/ratings for roomIds with with no ratings', async () => {
    const res = await request(server).get('/api/rooms/33333333/ratings');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });

  test('Should respond with a 405 Method Not Allowed to POST requests to /api/rooms/:roomId/ratings', async () => {
    const res = await request(server).post('/api/rooms/11111111/ratings');
    expect(res.statusCode).toBe(405);
  });

  test('Should respond with a 405 Method Not Allowed to PUT requests to /api/rooms/:roomId/ratings', async () => {
    const res = await request(server).put('/api/rooms/11111111/ratings');
    expect(res.statusCode).toBe(405);
  });

  test('Should respond with a 405 Method Not Allowed to PATCH requests to /api/rooms/:roomId/ratings', async () => {
    const res = await request(server).patch('/api/rooms/11111111/ratings');
    expect(res.statusCode).toBe(405);
  });

  test('Should respond with a 405 Method Not Allowed to DELETE requests to /api/rooms/:roomId/ratings', async () => {
    const res = await request(server).delete('/api/rooms/11111111/ratings');
    expect(res.statusCode).toBe(405);
  });

  test('Should respond with a 200 OK to GET requests to /api/rooms/:roomId/reviews', async () => {
    const res = await request(server).get('/api/rooms/11111111/reviews');
    expect(res.statusCode).toBe(200);
  });

  test('Should retrieve all rating records from DB on GET requests to /api/rooms/:roomId/reviews', async () => {
    const res = await request(server).get('/api/rooms/11111111/reviews');
    expect(res.body[0].roomId).toBe(11111111);
    expect(res.body.length).toBe(1);
  });

  test('Should retrieve an empty array from DB on GET requests to /api/rooms/:roomId/reviews for roomIds with with no reviews', async () => {
    const res = await request(server).get('/api/rooms/33333333/reviews');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });

  test('Should respond with a 405 Method Not Allowed to POST requests to /api/rooms/:roomId/reviews', async () => {
    const res = await request(server).post('/api/rooms/11111111/reviews');
    expect(res.statusCode).toBe(405);
  });

  test('Should respond with a 405 Method Not Allowed to PUT requests to /api/rooms/:roomId/reviews', async () => {
    const res = await request(server).put('/api/rooms/11111111/reviews');
    expect(res.statusCode).toBe(405);
  });

  test('Should respond with a 405 Method Not Allowed to PATCH requests to /api/rooms/:roomId/reviews', async () => {
    const res = await request(server).patch('/api/rooms/11111111/reviews');
    expect(res.statusCode).toBe(405);
  });

  test('Should respond with a 405 Method Not Allowed to DELETE requests to /api/rooms/:roomId/reviews', async () => {
    const res = await request(server).delete('/api/rooms/11111111/reviews');
    expect(res.statusCode).toBe(405);
  });
});
