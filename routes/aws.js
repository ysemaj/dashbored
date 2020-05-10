const aws = require("aws-sdk");
const uuid = require("uuid");

const credentials = new aws.SharedIniFileCredentials({
  profile: "default",
});

aws.config.credentials = credentials;

aws.config.getCredentials((err) => {
  if (err) console.log(err.stack);
  else {
    console.log("Access key:", aws.config.credentials.accessKeyId);
    console.log("Secret access key:", aws.config.credentials.secretAccessKey);
  }
});

module.exports = aws;
