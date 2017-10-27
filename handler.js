//The main handler method that does all the CRUD operations. 

'use strict';

const mydkvCreate = require('./mydkv-create.js');
const mydkvReadAll = require('./mydkv-read-all.js');
const mydkvReadOne = require('./mydkv-read-one.js');
const mydkvUpdate = require('./mydkv-update.js');
const mydkvDelete = require('./mydkv-delete.js');

//
// Create a KV Pair 
// URL : https://XXXX.execute-api.region.amazonaws.com/dev/mydkv
// VERB : POST
//Sample body : {"key":"value"}
//
module.exports.create = (event, context, callback) => {
  mydkvCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

//
// Read all KV Pairs - return a list of all the KV Pairs. 
// URL : https://XXXX.execute-api.region.amazonaws.com/dev/mydkv
// VERB : GET
//
module.exports.readAll = (event, context, callback) => {
  mydkvReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

//
// Read just one KV Pair - expects the id of the KV to be passed
// URL : https://XXXX.execute-api.region.amazonaws.com/dev/mydkv/<id>
// VERB : GET
//
module.exports.readOne = (event, context, callback) => {
  mydkvReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

//
// Update an areayd existing KV Pair 
// URL : https://XXXX.execute-api.region.amazonaws.com/dev/mydkv/<id>
// VERB : PUT
//Sample body : {"key":"newvalue"}
//
module.exports.update = (event, context, callback) => {
  mydkvUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

//
// Delete a KV Pair 
// URL : https://XXXX.execute-api.region.amazonaws.com/dev/mydkv/<id>
// VERB : DELETE
//
module.exports.delete = (event, context, callback) => {
  mydkvDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
