- /[0-9]/.test("sos")   检验目标字符串是否符合规则（正则表达式：确定待检测的字符是否正是符合规则的对象）
    js除了简单类型 ，一切都是对象  
    //  正则对象 RegExp
    运算符号用于表达规则 [0-9] 
    [] 表示范围
    {5,13} 限定长度
    /^[]{}&/ 保证字符串的开头结束都满足规则


- 631758924 数字 加密
    规则是 第一个数删除，第二个数移动到末尾
    第三个数删除，第四个数移到末尾，直至最后一个数也删除
    631758924   6
    17589243    1
    5892437     5
    924378      9
    43782       4
    7823        7
    238         2
    83          8
    3

    数组是最廉价的数据结构  本身是一个线性的连续的存储空间
    下标  head 指向头部   tail 指向尾部
    如果一个数组只在队尾插入和删除——栈（后进先出）
    在头部删除，在尾部加上元素——队列（Queue 先进先出)