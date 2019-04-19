# 清除浮动的5种方法
1. 在父元素底部加一行代码<div style="clean:both></div>
2. overflow: hidden;||scroll||
      利用BFC  /* 能够触发块级格式化上下文 */来给父元素增加css
      div.content{
          overflow:auto||hidden||scroll
      }
3. 利用伪元素就可以清除浮动 给父元素的div添加一个clearfix类名
.clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
4. 给父元素增加一行css
.content{
    float:left;
}(不建议使用)
5. 一个更优雅的改进 --尼古拉斯大师 方法
把 diaplay设置为table,可以创建为一个表格单元，这个匿名的表格单元可以直接出发BFC，
利用伪元素就可以清除浮动 给父元素的div添加一个clearfix类名
.clearfic{
    
    display:table;
    
}

双飞翼布局和圣杯布局的最大不同
1. 内容继承的是浏览器的宽度
2. 
