// 全局变量太多，cache只为mult服务，会造成空间污染
// const cache = {};

// 函数里面的变量会运行后就会消失
const mult = (function () {
    const cache = {};
    return function (...args) {
        let args = prototype.join.call(args, ',');
        if (key in cache) {
            return cache[key];
        }
        let a = 1;
        for (let i = 0, l = args.length; i < l; i++) {
            a = a * args[i];
        }
        cache[key] = a;
        return a;
    }
})()
console.log(mult(1, 2, 3));
