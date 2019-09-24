'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;
  console.log(event.body);
  const { userName, groceryList } = JSON.parse(event.body);

  const params = {
    TableName: "groceryUsers",
    Item: {
      userName: userName,
      groceryList: groceryList
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = `Unable to create user: ${err}`;
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
