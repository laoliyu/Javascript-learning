不再写CSS，写的是CSS的预编译语言stylus 
快

一套语法，支持现代CSS开发，
compile过程
stylus style.styl -o style.css
-o 就是代表output 输出的
stylus -w style.styl -o style.css
-w 是watch的意思 一直监听style.styl文件的修改。实时的去生成style.css

 text-rendering optimizeLegibility这个属性可以让文字清晰
  vertical-align middle 可以让图片一行兄弟在一行对齐  display inline-flex     align-items center

 1. 跟CSS 的规则说byebye
    {} : ; 都不需要 只要tab
2. stylus 提供嵌套功能
    可以帮我们补上前面的选择器
    现在我们css 就模块化，从此CSS就有编程感觉了
3. &运算符
    依然使用tab缩进， 但是它与上一级同级
    适合于同一个元素多个类名 ， .active
    或者伪类，伪状态
4. 变量定义
$fz = 12px
$text_color = #333333
$bgc = green
    将常用的或者重复使用
    CSS不是编程语言， 表达性的
    在最上面统一定义后，可以修改一处，
    所有使用此变量的地方都会修改，就可以改变网站的风格


    总结：
    CSS的语法
    1. overflow:hidden
    2. flex align-items 搞定vertical-align有时候不好搞定的地方
    vertical-align 兄弟之间img+兄弟
    3. text-rendering:optimizelegibility
    抗锯齿，高清手机上文字的边缘不出现锯齿
    4. flex-shrink:()
    flex-grow
    5.第几个元素的选择
     &:first-child ：last child
                margin-left 0

        // &:nth-child(2n) :nth-child(2n+1)

        -apple-system

    