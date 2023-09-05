
const redirectController  = require('../controllers/redirectController');

test('redirectController function unit test', async () => {
    const mockReq = {
      headers: { 'x-api-key': 'test-key' },
      body: { "text" : "some text" }
    };
  
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  
    await redirectController.redirect(mockReq, mockRes);

    // Now we can perform assertions on jsonResponse, based on what you expect
    expect(mockRes.json).toHaveBeenCalledWith({ output: 'Hello from mockAI responding to: some text' });
    expect(mockRes.status).toHaveBeenCalledWith(200);


  });

