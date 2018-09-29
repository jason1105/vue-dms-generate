/**
 * Created by lvwei on 2018/09/29.
 */

const fs = require('fs');
const chalk = require('chalk');
const ejs = require('ejs')

exports.run = function(args, name) {

    let dataFilePath = findInputData(args);

    // console.log("args:", args);
    // console.log("file:", dataFilePath);

    if (!dataFilePath) {
        console.error('File not found: ', args);
        return;
    }

    ejs.renderFile('./src/template/template.ejs', JSON.parse(fs.readFileSync(dataFilePath, {})), {}, function(err, str){

        if (err) {
            console.error(err);
        } else {
            console.log(str);
            fs.writeFile(process.cwd() + "/output.vue", str, {}, function(err){
                if (err) {
                    console.error(err);
                }
            });
        }

    });

};

let findInputData = function(args) {
    if (fs.existsSync(args)) {
        return args;
    } else {
        if (fs.existsSync(process.cwd() + args)) {
            return process.cwd() + args;
        } else {
            return null;
        }
    }
};






