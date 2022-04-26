const fetch = require('node-fetch');
require('dotenv').config();

// Import will setup & start the server (Do not remove for blackbox testing!)
const _ = require('../../../src/server.js');

// Stub server setup:
const stubServer = require('../../resources/stubServer.js');

// 'describe' statement to Create Test Suite:
describe('Endpoint Testing:', () => {
    
    // Start the stubServer
    beforeAll(() => {
        stubServer.listen();
    });
    // Stop the stubServer
    afterAll(() => stubServer.close());
    /*
    Resets the stubServer handlers to the original stubServer's handler configuration (defined in stubServer.js)
    in case any change(s) have been made.
    */
    afterEach(() => stubServer.resetHandlers());
    
    // 'it' to Create Test Case:
    test('Testing Endpoint: /sampleRoute/post', async () => {
        // Fetch API to simulate API calls & e2e flow.
        await fetch(`http://localhost:${process.env.PORT}/sampleRoute/post`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST"
        })
        .then(res => {
            // console.log(res);
            // console.log(res.body);
            expect(res.status).toBe(200);
            return res.json()
        })
        .then(res => {
            expect(res).toEqual({"data":"post"});
        });

    });

    test('Testing Endpoint: /sampleRoute/apiMockTest', async () => {
        // Define the API Call Mock's Return Value:
        // fetch.mockResolvedValue(new Response(JSON.stringify(getMockResponse)));

        await fetch(`http://localhost:${process.env.PORT}/sampleRoute/apiMockTest`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
        .then(res => res.json())
        .then(res => {
            // expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(res).toEqual({"data":"apiMockTest"});
        })
    })

    // it("SuperTest test: ", () => {
    //     request(app)
    //         .get('/sampleRoute/post')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200, done);
    // })

    // Insert other tests below this line
});