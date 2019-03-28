var s3 = require("./s3-client");

let putObject = async (body, bucket, objectKey) => {
  try {
    const params = {
      Body: body,
      Bucket: bucket,
      Key: objectKey
    };
    var res = await s3.putObject(params).promise();
    return res;
  } catch (e) {
    throw new Error(`Could not upload file to S3: ${e.message}`);
  }
};

module.exports = putObject;
