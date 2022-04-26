// This is where business logic goes:

let sampleSchema = require('../models/SampleSchema');

const ObjectId = require('mongoose').Types.ObjectId;

function sampleService(someInput) {
  if (someInput == null) return true;
  return false;
}

function sampleMockForEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

// async function addSampleInstance() {
//   try {
//     let newSchemaInstance = new sampleSchema({
//       _id: new ObjectId(),
//       s_msg: "some_string",
//     });
//     await newSchemaInstance.save();
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }

module.exports = { sampleService, sampleMockForEach };