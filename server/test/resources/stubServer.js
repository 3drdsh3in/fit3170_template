const msw = require('msw');
const mswNode = require('msw/node');

// Handlers:
const getMockResponseHandler = require('./handlers/getMockResponseHandler');

const server = mswNode.setupServer(
    msw.rest.get('http://localhost:8000/sampleRoute/apiMockTest', getMockResponseHandler),
)

module.exports = server;