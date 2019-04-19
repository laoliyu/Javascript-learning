// Player类，构造函数
// "use strict";
function Player(name){
    //constructor
    // this 相当于{}他是对象
    // this全局||指向的对象
    console.log(this);
     this.name = name;
     this.enemy = null ;
    //  null来进行赋值

}
// js 类的方法要定义在prototype上
Player.prototype.win = function() {
console.log(this.name+"win");
}
Player.prototype.lose = function()
{
    console.log(this.name+"lose");
}// 对象实例化
// Player("皮蛋")//普通函数调用
var player1 = new Player("皮蛋");
console.log(typeof player1);
// var player2 = new Player("小怪");
// console.log(player1.name)
// win函数，作为对象的方法被调用
player1.win();
var player2 = new Player("小怪");
player2.lose();
player1.enemy = player2;
player2.enemy = player1;
console.log(player1.enemy);
console.log(player2.enemy)