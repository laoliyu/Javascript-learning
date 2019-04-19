如何实现红包算法
固定金额的代码，由若干的人来抢，guize

1. 抢到金额之和等于红包金额，不能超过，不能少于。
2. 手气王，0.01至少，
3. 金额随机，随机数，公平，每个人抢到的概率要相同

计算过程， 变量计算的本质
发钱？ total = restAmount--
restNum-- == num
随机一次，restAmont = restAmount -随机数
restnum --
最后一个人，拿最后的钱for（i = 0;i< num -1; i++）
每次随机，钱数是我们需要的，Push数组里，
总和，

Math 是数学对象
Math.random()
parseFloat 是转换类型
toFixed()保留小数点几位
parseFloat()随机数解析为浮点数
类型转换 “23.1”=>23.1 parseFloat
0-9之间的整数
Math.floor(Math.random()*10)
let max = 100
let min = 0;
最小值与最大值之间的数
min + Math.floor(Math.random*(max-min));
floor 是向下取整
ceil 是上取整
round 是四舍五入