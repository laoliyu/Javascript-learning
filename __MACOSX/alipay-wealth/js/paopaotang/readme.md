class 类js 现在也有了
es5 没有class 关键字？ 怎么做面向对象呢？
js 是面向对象的，Function 是一等对象
普通函数Player（）
new Player（）;作为类的构造函数被运行
funcion Player（）{this}
this 一直都在，函数里的一个常在，指针
this指向了一个object{} 比如 this.name=name

函数运行方式的不同，里面的this 指向不同
普通函数被运行的时候，this指针没有使命，他会指向全局，前端指向window ,node 指向就是global
函数作为构造函数被运行的时候 new Player（）；
this会指向实例化的对象，构造函数需要的过程

- 函数可以用来构造类 js借，通过this
- this 是一直在的，指针
函数的运行方式， this指向不一样
普通函数 this=>全局window||global
如果代码启动严格模式，undefinded
- new 过程中发生了什么
new Player();将函数作为构造函数运行
this 指向新的对象object{}

this=>{} constructor
this.name = name
- 构造函数
- 