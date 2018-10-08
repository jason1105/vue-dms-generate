/**
 * Created by lvwei on 2018/09/29.
 */

const fs = require('fs');
const chalk = require('chalk');
const ejs = require('ejs');
const utils = require('./Utils');
const defaultOut = './output.vue';
const program = require('commander');
const pathUtils = require('path');

exports.run = function (args) {

    utils.fixPath(args, function(err, templatePath){

        // console.log(args);
        // console.log("__dirname = %s", __dirname);

        if (err) {

            console.log(chalk.red(err));
        } else {

            ejs.renderFile(pathUtils.resolve(__dirname + '/template/template.ejs'), JSON.parse(fs.readFileSync(templatePath, {})), {}, function (err, str) {

                if (err) {

                    console.error(chalk.red(err));
                } else {

                    utils.post(str, function (err, string) {

                        if (err) {

                            console.error(chalk.red(err));
                        } else {

                            let output = program.output || defaultOut;

                            fs.writeFile(output, string, {}, function (err) {

                                if (err) {

                                    console.error(chalk.red(err));
                                } else {

                                    console.log(chalk.yellow(string));
                                    console.log(chalk.green('Output: ' + output));
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};
