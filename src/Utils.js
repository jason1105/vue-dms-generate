/**
 * Created by lvwei on 2018/09/30.
 */
const format = require('html-format');
const fs = require('fs');
const pathUtils = require('path');

function postProcess (string, lvCallback) {
    string = format(string, '    ');
    lvCallback(undefined, string);
}

function fixPath (path, lvCallback) {

    let error = '';

    if (fs.existsSync(path)) {

    } else {
        if (fs.existsSync(pathUtils.join(process.cwd(), path))) {
            path = process.cwd() + path;
        } else {
            error = "File not found: " + path;
        }
    }

    lvCallback(error, path);
}

// 导出一个方法
exports.fixPath = fixPath;
exports.post = postProcess;

// 导出一个模块
// exports.default = utils;
// module.exports = Object.assign(exports.default, exports);