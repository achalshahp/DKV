//The is called when we are trying to read the KV Pairs

'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
  const params = {
    TableName: 'MyDKV',
  };

  return dynamoDb.scan(params, (error, data) => {
    if (error) {
      callback(error);
    }
    callback(error, data.Items);
  });
};
