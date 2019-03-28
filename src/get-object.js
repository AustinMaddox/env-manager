var s3 = require("./s3-client");

let getObject = async (bucket, objectKey) => {
  try {
    const params = {
      Bucket: bucket,
      Key: objectKey
    };
    const data = await s3.getObject(params).promise();
    return data.Body.toString("utf-8");
  } catch (e) {
    throw new Error(`Could not download file from S3: ${e.message}`);
  }
};

module.exports = getObject;
