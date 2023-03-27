const shell = require('shelljs');

const result = shell.exec('cross-env NODE_ENV=production tsc -p tsconfig.build.json && cross-env NODE_ENV=production tsc-alias -p tsconfig.build.json');
if (result.code === 0) {
    console.log("tsc build success");
    const result1 = shell.exec('unbuild');
    if (result1.code === 0) {
        console.log("ui build success");
    }
}
