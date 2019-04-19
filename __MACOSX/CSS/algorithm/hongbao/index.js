function hongbao(total, num) {
const arr = [];
let restAmount = total;//余额初始化总钱
let restNum = num;

for (let i = 0; i<num-1;i++){
    //还有一个人不发
    //平均值得两倍
    let amount = parseFloat( Math.random()*(restAmount/restNum*2)).toFixed(2);
    restAmount -= amount;
    restNum--;
    arr.push(amount);
}
//最后一个人restAmount
arr.push(restAmount.toFixed(2));
return arr;
}
 console.log(hongbao(20,44));