'use strict';
const AWS = require("aws-sdk");
const fs = require("fs");
const s3Client = new AWS.S3({
  s3ForcePathStyle: true,
  accessKeyId: 'S3RVER', // This specific key is required when working offline
  secretAccessKey: 'S3RVER',
  endpoint: new AWS.Endpoint('http://localhost:4569'),
});

module.exports.webhook = async (event, context, callback) => {
  const uploadFile = fs.readFileSync("./upload_data.json");
  const params = {
    Bucket: 'local-bucket',
    Key: 'upload_data.json',
    Body: uploadFile    
  }
  const response = await s3Client.putObject(params).promise().catch(err => {
    console.log(err, err.stack);
  });
  console.log("OK");
  callback();
};

module.exports.hello = async (event) => {
  const params = {
    Bucket: event["Records"][0]["s3"]["bucket"]["name"],
    Key: event["Records"][0]["s3"]["object"]["key"]
  };

  const response = await s3Client.getObject(params).promise().catch((err) => {
    console.log(err, err.stack);
  });
  console.log(JSON.parse(response.Body.toString()));
}
