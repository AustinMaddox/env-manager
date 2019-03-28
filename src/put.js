var program = require("commander");
var fs = require("fs");
var putObject = require("./put-object");

// console.log("process.env", process.env);

program
  .option("-B, --bucket <bucket>", "Specify the bucket")
  .option("-b, --branch <branch>", "Specify the branch")
  .option("-p, --project <project>", "Specify the project")
  .action(options => {
    bucket = options.bucket;
    branch = options.branch;
    project = options.project;
  })
  .parse(process.argv);

const filename = ".env";
const objectKey = `${branch}/${project}/${filename}`;

fs.readFile(`s3/${bucket}/${objectKey}`, (err, data) => {
  if (err) throw err;
  var body = data;
  putObject(body, bucket, objectKey).then(res => {
    console.log(res);
  });
});
