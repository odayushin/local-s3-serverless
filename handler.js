"use strict";
const AWS = require("aws-sdk");
const dynamodbClient = new AWS.DynamoDB({
  endpoint: "http://localhost:8000",
});

module.exports.hello = async (event) => {
  const params = {
    TableName: "SomeTable",
  };
  const response = await dynamodbClient
    .scan(params)
    .promise()
    .catch((err) => console.log(err));
  console.log(JSON.stringify(response));

  // const params = {
  //   Bucket: event["Records"][0]["s3"]["bucket"]["name"],
  //   Key: event["Records"][0]["s3"]["object"]["key"],
  // };

  // const response = await s3Client
  //   .getObject(params)
  //   .promise()
  //   .catch((err) => {
  //     console.log(err, err.stack);
  //   });
  // console.log(JSON.parse(response.Body.toString()));
};
