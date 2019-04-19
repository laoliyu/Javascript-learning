## 界面大框架及经验

水平方向禁止滚动条， 垂直方向出现滚动条
- 水平和垂直两个方向都滚动，页面会摇晃 误操作
- 垂直方向滚动是我们开发的主要方式

- margin:0 auto; max-basis:960px 美元
- flex 布局
flex-grow 放大 flex-basis flex-shrink缩小
flex-wrap
当网页由PC到mobile时候，缩小阵仗


经验 
简答的适配PC到mobile照顾所有的用户
PC 大手大脚一点， max-wadith margin:auto;
padding margin 
mobile flex-shrink 让关键的部分坚挺一点
