var fs = require('fs-extra');

var src = './src/server';
var output = './dist/server';


if(!fs.existsSync(output)){
    fs.mkdirSync(output);
}

fs.copySync(src,output);

fs.copySync('./src/appsscript.json', './dist/appsscript.json');