// Import the global AWS namespace without every service attached to it.
var AWS = require("aws-sdk/global");
AWS.config.logger = console;

// Import the Amazon S3 service client.
var S3 = require("aws-sdk/clients/s3");

// Set credentials and region.
var s3 = new S3({
  apiVersion: "2006-03-01",
  profile: process.env.AWS_PROFILE,
  region: "us-west-2"
});

module.exports = s3;
