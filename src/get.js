var program = require("commander");
var fs = require("fs");
var getObject = require("./get-object");

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

fs.mkdir(`s3/${bucket}/${branch}/${project}`, { recursive: true }, err => {
  if (err) throw err;
  getObject(bucket, objectKey).then(body => {
    fs.writeFile(`s3/${bucket}/${objectKey}`, body, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
});
