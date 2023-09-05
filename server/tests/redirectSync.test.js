
const request = require('supertest')
const {server} = require('../server')
const debug = require('debug')('test:timing');

afterAll(done => {
  server.close(done);
});

test('should respond 200 for first req, 503 for second one sending after 1 sec', async() => {
  const req1 = request(server).post('/redirect'). send({text: "some text req1"})

  await new Promise(resolve => setTimeout(resolve, 1000));
  const req2 = request(server).post('/redirect'). send({text: "some text req2"})

  const [res1, res2] = await Promise.all([req1, req2]);
//   console.log(res1.status, res2.status)

  expect(res1.status === 200 && res2.status === 503).toBe(true);
})
