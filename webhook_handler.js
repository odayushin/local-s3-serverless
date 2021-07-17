"use strict";
const AWS = require("aws-sdk");
const fs = require("fs");
const s3Client = new AWS.S3({
  s3ForcePathStyle: true,
  accessKeyId: "S3RVER", // This specific key is required when working offline
  secretAccessKey: "S3RVER",
  endpoint: new AWS.Endpoint("http://localhost:4569"),
});

module.exports.webhook = async (event, context, callback) => {
  const uploadFile = fs.readFileSync("./upload_data/upload_data.json");
  const params = {
    Bucket: "local-bucket",
    Key: "upload_data.json",
    Body: uploadFile,
  };
  const response = await s3Client
    .putObject(params)
    .promise()
    .catch((err) => {
      console.log(err, err.stack);
    });
  console.log("OK");
  callback();
};
