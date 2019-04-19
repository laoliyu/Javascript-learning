Person 由constructor（prototype）属性来解决它自身构造之外的原型上的属性或方法
原型对象会有它的构造函数 Person.prototype.constructor属性
第三者？ 实例
实例 跟Person 有什么关系， pserson.prototype 有关系

js的实例跟类其实不是java等语言的血缘关系
zl 实例 是怎么来的呢？
new person()出来的
1. Person 函数运行 new 的方式， this=>new Object();
2. zl 怎么拿到Person.prototype原型对象上
定义的方法 _proto_ 属性
3. 方法有prototype属性，值为对象 开支
4. 任何对象一定有_proto_指向原型对象 
5. 原型对象上有一个额外constrctor属性指向谁它的构造函数

原型链







            prototype       _proto_
1.构造函数 <--->构造函数的原型--->构造函数生成的实例
          constructor
 