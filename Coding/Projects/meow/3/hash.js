var md5 = require('md5');
var sha1 = require('sha1');
var sha2 = require("sha2");

switch(process.argv[2]) {
  case "all":
    console.log(`SHA1: ${sha1(process.argv[3])}`);
    console.log(`MD5: ${md5(process.argv[3])}`);
    break
  case "md5":
    console.log(`MD5: ${md5(process.argv[3])}`);
    break
  case "sha1":
    console.log(`SHA1: ${sha1(process.argv[3])}`);
    break
  case "sha224":
    console.log(`SHA-224: ${sha2.SHA224(process.argv[3])}`);
    break
}
