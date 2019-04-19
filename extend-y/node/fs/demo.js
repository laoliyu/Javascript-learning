//fs模块 是后端开发的一部分
const fs = require('fs');//文件读取功能
//读文件是异步的，
// fs.readFile('./a.txt', 'utf8', function (err, data) {
//     console.log(data);

// fs.readFile('./b.txt','utf8', function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })
// })
// 利用回调函数的方法抛弃
const fileAPromise = new Promise((resolve, reject) => {
    // 花时间的诺言 耗时任务
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        // 流程的控权怎么移交
        resolve(data);
        // console.log(data);
    })
});
const fileBPromise = new Promise((resolve, reject) => {
    fs.readFile('./b.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    })
})

// 将内部的耗时任务执行起来
fileAPromise
    .then((data) => {
        console.log(data);
        return fileBPromise;
    })
    .then((data) => {
        console.log(data);
    })
