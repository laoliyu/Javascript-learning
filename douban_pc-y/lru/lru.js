
// 缓存：不用每次都去硬盘里查找， 在内存中缓存

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.obj = {};//key
    this.arr = [];
}
LRUCache.prototype.get = function (key) {
    // 首先判断里面有没有
    // if(!key == null){
    // 设置为最近使用
    //    this.arr.unshift(key);
    //     console.log(key);
    var val = this.obj[key];
    // 容量不大的内存服务于最多的进程
    if (val > 0) {
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
    }
    else {
        return -1;
    }

}
LRUCache.prototype.set = function (key, value) {
    // 如果有key,就返回
    if (this.obj[key]) {
        this.obj[key] = value;
        // 最近使用的 数组的[0]
        // 如何把它之前的删除
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
    }
    if (this.capacity === this.arr.length) {
        // 放满了
        var k = this.arr.pop();
        // 最近最少使用
        this.obj[k] = undefined;

    }
    this.obj[key] = value;
    this.arr.unshift(key);
    // 没有话， 两种可能  如果内存满了，要执行app.pop() 存进去
}
LRUCache
