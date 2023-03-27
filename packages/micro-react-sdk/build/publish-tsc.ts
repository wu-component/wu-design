const shell = require('shelljs');

const result = shell.exec('npm publish --access public');
console.log(result);
if (result.code === 0) {
    console.log("tsc publish success");
}
