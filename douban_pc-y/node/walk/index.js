const fs = require('fs');
const files = [];
// 一步一步 目录走下去
const walk = function (path) {
fs
 .readdirSync(path)
 .forEach(file =>{
    //  文件？
    // js文件？ 正则
    // 目录？ 递归
    const newPath = path + '/'+ file;
    const stat = fs.statSync(newPath);//判断是文件还是目录
    // console.log(stat);
    if(stat.isFile()){
        if(/\.js$/.test(file)){//判断是否是js文件
            files.push(file)
        }
    }else if(stat.isDirectory()){
        walk(newPath);
    }
// console.log(item);
 })
//  console.log('啦啦啦');
//  fs.readdir(path,function(err,items){
    //  console.log(items)
//  });
//  console.log('lalala')
 
}
walk('./src');
console.log(files);