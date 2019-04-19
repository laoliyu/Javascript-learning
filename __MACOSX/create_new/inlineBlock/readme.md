# BFC概念
block formatting context (块级格式化上下文)

#BFC 的原理（渲染规则）
1. 正常的文档流会存在边距折叠的问题（父元素 兄弟元素），水平方向的外边距不存在折叠的情况，（因为水平方向不存子块级元素）
2. BFC容器不会与浮动元素的BOX重叠， 
3. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔离的空间，外面的元素不会影响容器里面的元素，反之，里面的元素也不会影响容器外面的元素
4. 计算BFC容器高度时，浮动元素也会参与高度运算（也是通常清除浮动的原理）
#BFC的创建方法

 根元素或其它包含它的元素；
1. 浮动 (元素的float不为none)；
2. 绝对定位元素 (元素的position为absolute或fixed)；
3. 行内块inline-blocks(元素的 display: inline-block)；
4. 表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
5. overflow的值不为visible的元素；
6. 弹性盒 flex boxes (元素的display: flex或inline-flex)；

