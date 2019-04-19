new 的时候发生了什么？
1. 构造函数的运行方式是以new的方式被运行，函数内部的this运态指向实例化后的this.
空对象？ 开始时
之后， 拿到了构造函数里定义的属性
最后又拿到了prototype上定义的属性和方法


对象？ 由属性和方法

1. 实例化一个新的对象，并且是这个类的实例
2. 构造函数被执行，this指向实例
constructor 运行慢半拍
在面向对象里构造函数是为他人服务的，为this服务,this由函数运行方式决定
this ->实例new
this -> 任何对象call
3. Otaku.prototpe 值是对象  原型对象

任何一个函数都仍有一个prototype的属性,才能构建类火车 constructor车头，

车头勾着车身 