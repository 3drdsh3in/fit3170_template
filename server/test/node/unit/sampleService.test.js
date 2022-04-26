const mongoose = require('mongoose');

// const { sampleService, sampleMockForEach, addSampleInstance } = require("../../../src/services/sampleService");
let sampleService = require("../../../src/services/sampleService");

const sampleSchema = require("../../../src/models/SampleSchema");


describe('Endpoint Testing:', () => {

    beforeAll(() => {
        let environment = 'test';
        let uri = `mongodb://admin:password@localhost:27017`; 
        mongoose.connect(
            uri, { useNewUrlParser: true, useUnifiedTopology: true },
            () => {
              console.log(`Connected to mongoDB in ${environment} mode connecing to ${uri}`);
            }
        );
    })

    // Sample Unit Test:
    test('should output true:', () => {
        const returnVal = sampleService.sampleService(null);
        expect(returnVal).toBe(true);
        const returnVal2 = sampleService.sampleService("notNull");
        expect(returnVal2).toBe(false);
    })

    // Mocking Sample:
    test('mock test:', () => {
        // Mocked function just adds 42 to input value & returns:
        const mockCallBack = jest.fn(x=>x+42);
        sampleService.sampleMockForEach([0,1],mockCallBack);

        expect(mockCallBack.mock.calls.length).toBe(2);

        expect(mockCallBack.mock.calls[0][0]).toBe(0);
        expect(mockCallBack.mock.calls[1][0]).toBe(1);

        // The return value of the first call to the function was 42
        expect(mockCallBack.mock.results[0].value).toBe(42);
        expect(mockCallBack.mock.results[1].value).toBe(43); // Then 43 for the second
    })

});