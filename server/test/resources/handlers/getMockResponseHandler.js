// Stub Server Response Data (For Mocking):
const getMockResponseData = require('../__testdata__/getMockResponse.json');

const getMockResponseHandler = (req, res, ctx) => {
    console.log(req);
    return res(
    
    // Delay response by 1500 ms.
    ctx.delay(1500),
    // 200 OK.
    ctx.status(200, 'Mocked status'),
    // Return Mock Data.
    ctx.json(getMockResponseData),
    )
}

module.exports = getMockResponseHandler;