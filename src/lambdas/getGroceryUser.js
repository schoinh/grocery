'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { userName } = event.pathParameters;

  const params = {
    TableName: "groceryUsers",
    Key: {
      userName: userName
    }
  }

  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch (err) {
    responseBody = `Unable to delete user: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*"
    },
    body: responseBody
  };

  return response;
};