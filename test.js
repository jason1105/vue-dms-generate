/**
 * Created by xushaoping on 17/10/11.
 */

// const fs = require('fs-extra')
//
// const name = 'xu'
// const pageFile = './src/page/' + name + '/' + name + '.vue'
// const styleFile = './src/page/' + name + '/' + name + '.less'
// fs.pathExists(pageFile, (err, exists) => {
//     if (exists) {
//         console.log('this file has created')
//     } else {
//         fs.copy('./src/template/page.vue', pageFile, err => {
//             if (err) return console.error(err)
//
//             console.log(pageFile + '  has created')
//         })
//         fs.copy('./src/template/page.less', styleFile, err => {
//             if (err) return console.error(err)
//
//             console.log(styleFile + '  has created')
//         })
//     }
// })

var coffee = require('coffee');

describe('cat', function() {
    it('should concat input', function(done) {
        coffee.spawn('cat')
            .write('1') // 往标准输入写入1和2
            .write('2')
            .expect('stdout', '12') // 测试 cat 原样将1和2输出
            .expect('code', 0) // 进程退出码为 0
            .end(done);
    });
});

