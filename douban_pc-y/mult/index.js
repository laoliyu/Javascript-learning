// 缓存计算结果 不要重复计算 ，计算了的保存在哪里？ 方式？
let cache = {};//对象字面量来存储数据
// key String arguments array
// key string <= arguments  类数组
function mult() {
    // ...args余下所有的
    // 参数数量是不定的
    let a = 1;
    // args 相关，数组 =>string key
    let key = Array.prototype.join.call(arguments, ',');
    if (cache[key]) {
        console.log('从中缓存了');
        return cache[key];

    }

    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
        // arguments是一个类数组
    }
    cache[key] = a;
    return a;
}
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));